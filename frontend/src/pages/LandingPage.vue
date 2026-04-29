<template>
  <q-page class="flex flex-center">
    <div class="container q-pa-md" style="max-width: 1200px; width: 100%">
      <!-- Заголовок страницы -->
      <div class="text-center q-mb-xl">
        <h1 class="text-h4 text-weight-bold text-primary q-mb-sm">{{ i18nStore.t('page.title') }}</h1>
        <p class="text-subtitle1 text-grey-7">
          {{ i18nStore.t('page.subtitle', { paidToken: paidTokenSymbol || 'PAID', workToken: workTokenSymbol || 'CXBT' }) }}
        </p>
      </div>
      <div  class="text-center q-mb-xl">
        <p>This is an Automated system and process for centralized completion and settlement of barter deals and transactions, for rapid achievement and fair valuation of barter exchange of goods and services;
real-time electronic transition.</p>
      </div>
      <!-- Секция балансов токенов (показывается только при подключенном кошельке и закрытом диалоге) -->
      <div v-if="wallet.isConnected && !isWalletDialogOpen" class="balances-section">
        <div class="row items-center justify-between q-mb-md">
          <h2 class="text-h5 text-weight-medium q-ma-none">{{ i18nStore.t('balances.title') }}</h2>
          <q-btn
            :loading="balancesLoading"
            :disable="balancesLoading"
            @click="handleRefresh"
            color="primary"
            outline
            round
            icon="refresh"
            size="md"
          >
            <q-tooltip>{{ i18nStore.t('balances.refresh') }}</q-tooltip>
          </q-btn>
        </div>

        <!-- Сообщение об ошибке -->
        <q-banner v-if="balancesError" class="bg-negative text-white q-mb-md rounded-borders">
          <template v-slot:avatar>
            <q-icon name="error" />
          </template>
          <div>
            <div class="text-weight-bold">{{ i18nStore.t('balances.errorLoading') }}</div>
            <div class="text-caption">{{ balancesError.message || i18nStore.t('balances.errorData') }}</div>
          </div>
        </q-banner>

        <!-- Индикатор загрузки -->
        <div v-if="balancesLoading" class="flex flex-center q-pa-xl">
          <q-spinner color="primary" size="3em" />
          <span class="q-ml-md text-grey-7">{{ i18nStore.t('balances.loading') }}</span>
        </div>

        <!-- Карточки балансов -->
        <div v-else class="row q-col-gutter-md">
          <!-- PAID Token Balance -->
          <div class="col-12 col-sm-6 col-md-4">
            <q-card class="balance-card">
              <q-card-section class="bg-primary text-white">
                <div class="row items-center">
                  <q-icon name="payments" size="2em" class="q-mr-md" />
                  <div>
                    <div class="text-subtitle2 text-uppercase">{{ paidTokenDisplayName }}</div>
                    <div class="text-caption opacity-75">{{ i18nStore.t('balances.paidBalance') }}</div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="text-h4 text-weight-bold text-primary">
                  {{ formatBalance(wallet.formattedPaidBalance) }}
                </div>
                <div class="text-caption text-grey-6 q-mt-xs">{{ paidTokenSymbol || 'PAID' }}</div>
              </q-card-section>
            </q-card>
          </div>

          <!-- WORK Token Balance -->
          <div class="col-12 col-sm-6 col-md-4">
            <q-card class="balance-card">
              <q-card-section class="bg-positive text-white">
                <div class="row items-center">
                  <q-icon name="work" size="2em" class="q-mr-md" />
                  <div>
                    <div class="text-subtitle2 text-uppercase">{{ workTokenDisplayName }}</div>
                    <div class="text-caption opacity-75">{{ i18nStore.t('balances.workBalance') }}</div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="text-h4 text-weight-bold text-positive">
                  {{ formatBalance(wallet.formattedWorkBalance) }}
                </div>
                <div class="text-caption text-grey-6 q-mt-xs">{{ workTokenSymbol || 'CXBT' }}</div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Locked WORK Tokens -->
          <div class="col-12 col-sm-6 col-md-4">
            <q-card class="balance-card">
              <q-card-section class="bg-warning text-white">
                <div class="row items-center">
                  <q-icon name="lock" size="2em" class="q-mr-md" />
                  <div>
                    <div class="text-subtitle2 text-uppercase">Locked {{ workTokenDisplayName }}</div>
                    <div class="text-caption opacity-75">{{ i18nStore.t('balances.lockedTokens') }}</div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="text-h4 text-weight-bold text-warning">
                  {{ formatBalance(wallet.formattedLockedTokens) }}
                </div>
                <div class="text-caption text-grey-6 q-mt-xs">{{ workTokenSymbol || 'WORK' }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Секция разблокировки токенов CXBT -->
        <div class="row q-col-gutter-md q-mt-lg">
          <div class="col-12">
            <q-card class="unlock-card">
              <q-card-section class="bg-info text-white">
                <div class="row items-center">
                  <q-icon name="lock_open" size="2em" class="q-mr-md" />
                  <div>
                    <div class="text-subtitle2 text-uppercase">{{ i18nStore.t('unlock.title') }}</div>
                    <div class="text-caption opacity-75">{{ i18nStore.t('unlock.description') }}</div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row q-col-gutter-md">
                  <div class="col-12 col-md-6">
                    <q-input
                      v-model.number="unlockAmount"
                      type="number"
                      :label="i18nStore.t('unlock.amountLabel')"
                      outlined
                      dense
                      :rules="[
                        val => val > 0 || i18nStore.t('unlock.amountMustBePositive'),
                        val => val <= parseFloat(wallet.formattedLockedTokens) || i18nStore.t('unlock.insufficientLocked')
                      ]"
                      @update:model-value="debouncedHandleUnlockAmountChange"
                    >
                      <template v-slot:append>
                        <span class="text-grey-7">{{ workTokenSymbol || 'WORK' }}</span>
                      </template>
                    </q-input>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="text-caption text-grey-7 q-mb-sm">
                      {{ i18nStore.t('unlock.percentageLabel') }}: <span class="text-weight-bold">{{ formattedUnlockPercentage }}%</span>
                    </div>
                    <div class="text-caption text-grey-7 q-mb-sm">
                      {{ i18nStore.t('unlock.costLabel') }}: <span class="text-weight-bold text-primary">{{ formattedUnlockCost }} {{ paidTokenSymbol || 'PAID' }}</span>
                    </div>
                  </div>
                </div>
                <div class="q-mt-md">
                  <q-btn
                    :loading="isUnlocking"
                    :disable="!unlockAmount || unlockAmount <= 0 || isUnlocking"
                    @click="handleUnlock"
                    color="primary"
                    :label="i18nStore.t('unlock.button')"
                    class="full-width"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Секция перевода CXBT токенов -->
        <div class="row q-col-gutter-md q-mt-lg">
          <div class="col-12">
            <q-card class="transfer-card">
              <q-card-section class="bg-positive text-white">
                <div class="row items-center">
                  <q-icon name="send" size="2em" class="q-mr-md" />
                  <div>
                    <div class="text-subtitle2 text-uppercase">{{ i18nStore.t('transfer.title') }}</div>
                    <div class="text-caption opacity-75">{{ i18nStore.t('transfer.description') }}</div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <q-banner v-if="transferError" class="bg-negative text-white q-mb-md rounded-borders">
                  <template v-slot:avatar>
                    <q-icon name="error" />
                  </template>
                  {{ transferError }}
                </q-banner>
                <q-banner v-if="transferSuccess" class="bg-positive text-white q-mb-md rounded-borders">
                  <template v-slot:avatar>
                    <q-icon name="check_circle" />
                  </template>
                  {{ i18nStore.t('transfer.success') }}
                </q-banner>
                <div class="row q-col-gutter-md">
                  <div class="col-12 col-md-6">
                    <q-input
                      v-model="transferForm.recipientAddress"
                      :label="i18nStore.t('transfer.recipientLabel')"
                      outlined
                      dense
                      placeholder="0x..."
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <q-input
                      v-model.number="transferForm.amount"
                      type="number"
                      :label="i18nStore.t('transfer.amountLabel')"
                      outlined
                      dense
                      placeholder="0.00"
                    >
                      <template v-slot:append>
                        <span class="text-grey-7">{{ workTokenSymbol || 'WORK' }}</span>
                      </template>
                    </q-input>
                  </div>
                </div>
                <div class="q-mt-md">
                  <q-btn
                    :loading="transferLoading"
                    :disable="transferLoading"
                    @click="handleTransfer"
                    color="positive"
                    :label="i18nStore.t('transfer.button')"
                    class="full-width"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

      </div>

      <!-- Сообщение для неподключенного кошелька -->
      <div v-else class="wallet-not-connected text-center q-pa-xl">
        <q-icon name="account_balance_wallet" size="5em" color="grey-4" class="q-mb-md" />
        <h2 class="text-h5 text-weight-medium q-ma-none q-mb-md">{{ i18nStore.t('wallet.notConnected') }}</h2>
        <p class="text-grey-7 q-mb-lg">
          {{ i18nStore.t('wallet.connectPrompt', { paidToken: paidTokenSymbol || 'PAID', workToken: workTokenSymbol || 'WORK' }) }}
        </p>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useI18nStore } from 'stores/i18n'
import { ref, computed, watch, onMounted } from 'vue'
import { useWalletStore } from '../stores/wallet'
import { useWalletConnect } from '../composables/useWalletConnect'
import { useTokenBalances } from '../composables/useTokenBalances'
import { useTokenUnlock } from '../composables/useTokenUnlock'
import { useTokenTransfer } from '../composables/useTokenTransfer'
import { Notify, debounce } from 'quasar'

const i18nStore = useI18nStore()

/**
 * Безопасно логирует объект ошибки, конвертируя BigInt в строки
 * @param {Error} err - Объект ошибки
 * @returns {Object} Объект для логирования без BigInt
 */
const safeLogError = (err) => {
  return {
    name: err.name,
    message: err.message,
    code: err.code,
    cause: err.cause ? safeLogError(err.cause) : undefined,
    data: err.data ? JSON.stringify(err.data, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    ) : undefined
  }
}

// Получаем wallet store
const wallet = useWalletStore()

// Получаем флаг состояния диалога кошелька
const { isWalletDialogOpen } = useWalletConnect()

// Используем composable для получения балансов
const {
  paidBalance,
  workBalance,
  lockedTokens,
  paidTokenName,
  paidTokenSymbol,
  workTokenName,
  workTokenSymbol,
  paidDecimals,
  workDecimals,
  isLoading: balancesLoading,
  error: balancesError,
  fetchBalances
} = useTokenBalances(() => wallet.address)

// Используем composable для разблокировки токенов
const {
  getUnlockPercentage,
  calculateUnlockCost,
  unlockTokensWithApproval,
  isLoading: unlockLoading,
  error: unlockError
} = useTokenUnlock()

// Используем composable для перевода токенов
const { transferWorkTokens } = useTokenTransfer()

// Реактивные переменные для разблокировки
const unlockAmount = ref(0)
const unlockCost = ref(0n)
const unlockPercentage = ref(0n)
const isUnlocking = ref(false)

// Реактивные переменные для формы перевода
const transferForm = ref({
  recipientAddress: '',
  amount: ''
})
const transferLoading = ref(false)
const transferError = ref('')
const transferSuccess = ref(false)

// Вычисляемые свойства для форматирования значений
const formattedUnlockPercentage = computed(() => {
  const percentage = Number(unlockPercentage.value) / 10000
  return percentage.toFixed(2)
})

const formattedUnlockCost = computed(() => {
  if (!workDecimals.value) return '0'
  // Контракт возвращает стоимость в единицах CXBT (workDecimals decimals)
  // а не PAID токена, поэтому делим на workDecimals
  const decimals = workDecimals.value || 18
  const formatted = Number(unlockCost.value) / (10 ** decimals)
  return formatted.toFixed(6)
})

// Получаем процент разблокировки при загрузке страницы
onMounted(async () => {
  if (wallet.isConnected) {
    try {
      const percentage = await getUnlockPercentage()
      unlockPercentage.value = percentage
    } catch (err) {
      console.error('[LandingPage] Ошибка получения процента разблокировки:', safeLogError(err))
      Notify.create({
        type: 'negative',
        message: i18nStore.t('notify.unlockPercentageError'),
        caption: err.message
      })
    }
  }
})

// Обработчик изменения суммы разблокировки
const handleUnlockAmountChange = async (value) => {
  if (!value || value <= 0) {
    unlockCost.value = 0n
    return
  }

  try {
    // Конвертируем сумму в wei с учетом decimals
    const decimals = workDecimals.value || 18
    const amountInWei = BigInt(Math.floor(value * (10 ** decimals)))
    
    const cost = await calculateUnlockCost(amountInWei)
    unlockCost.value = cost
  } catch (err) {
    console.error('[LandingPage] Ошибка расчёта стоимости разблокировки:', safeLogError(err))
    Notify.create({
      type: 'negative',
      message: i18nStore.t('notify.unlockCostError'),
      caption: err.message
    })
    unlockCost.value = 0n
  }
}

// Debounced версия для уменьшения количества RPC запросов
const debouncedHandleUnlockAmountChange = debounce(handleUnlockAmountChange, 500)

// Обработчик кнопки разблокировки
const handleUnlock = async () => {
  if (!unlockAmount.value || unlockAmount.value <= 0) {
    Notify.create({
      type: 'warning',
      message: i18nStore.t('notify.enterUnlockAmount')
    })
    return
  }

  const lockedBalance = parseFloat(wallet.formattedLockedTokens)
  if (unlockAmount.value > lockedBalance) {
    Notify.create({
      type: 'warning',
      message: i18nStore.t('notify.insufficientLocked')
    })
    return
  }

  isUnlocking.value = true

  try {
    // Конвертируем сумму в wei с учетом decimals
    const decimals = workDecimals.value || 18
    const amountInWei = BigInt(Math.floor(unlockAmount.value * (10 ** decimals)))
    
    await unlockTokensWithApproval(amountInWei, wallet.address)
    
    Notify.create({
      type: 'positive',
      message: i18nStore.t('notify.unlockSuccess')
    })
    
    // Сбрасываем значения
    unlockAmount.value = 0
    unlockCost.value = 0n
    
    // Обновляем балансы
    await fetchBalances()
  } catch (err) {
    console.error('[LandingPage] Ошибка разблокировки токенов:', safeLogError(err))
    
    // Проверяем, отменил ли пользователь транзакцию (код 4001)
    if (err.code === 4001 || (err.message && err.message.toLowerCase().includes('user rejected'))) {
      console.log('[LandingPage] Пользователь отменил транзакцию разблокировки')
      Notify.create({
        type: 'info',
        message: i18nStore.t('notify.transactionCancelled'),
        caption: i18nStore.t('notify.transactionRejected'),
        timeout: 3000
      })
      return
    }
    
    Notify.create({
      type: 'negative',
      message: i18nStore.t('notify.unlockError'),
      caption: err.message
    })
  } finally {
    isUnlocking.value = false
  }
}

// Логируем данные из composable для отладки
console.log('[LandingPage] Инициализация composable')
console.log('[LandingPage] wallet.address:', wallet.address)
console.log('[LandingPage] wallet.isConnected:', wallet.isConnected)

// Логируем значения названий токенов и decimals из composable
watch([paidTokenName, paidTokenSymbol, workTokenName, workTokenSymbol, paidDecimals, workDecimals], () => {
  console.log('[LandingPage] Значения из composable:')
  console.log('  - paidTokenName:', paidTokenName.value)
  console.log('  - paidTokenSymbol:', paidTokenSymbol.value)
  console.log('  - workTokenName:', workTokenName.value)
  console.log('  - workTokenSymbol:', workTokenSymbol.value)
  console.log('  - paidDecimals:', paidDecimals.value)
  console.log('  - workDecimals:', workDecimals.value)
}, { immediate: true })

// Логируем значения из wallet store
watch([() => wallet.paidTokenName, () => wallet.paidTokenSymbol, () => wallet.workTokenName, () => wallet.workTokenSymbol, () => wallet.paidDecimals, () => wallet.workDecimals], () => {
  console.log('[LandingPage] Значения из wallet store:')
  console.log('  - wallet.paidTokenName:', wallet.paidTokenName)
  console.log('  - wallet.paidTokenSymbol:', wallet.paidTokenSymbol)
  console.log('  - wallet.workTokenName:', wallet.workTokenName)
  console.log('  - wallet.workTokenSymbol:', wallet.workTokenSymbol)
  console.log('  - wallet.paidDecimals:', wallet.paidDecimals)
  console.log('  - wallet.workDecimals:', wallet.workDecimals)
}, { immediate: true })

// Вычисляемые свойства для отображения названий токенов с fallback
const paidTokenDisplayName = computed(() => {
  const result = paidTokenName.value || paidTokenSymbol.value || i18nStore.t('tokens.paidToken')
  console.log('[LandingPage] paidTokenDisplayName:', result)
  return result
})

const workTokenDisplayName = computed(() => {
  const result = workTokenName.value || workTokenSymbol.value || i18nStore.t('tokens.workToken')
  console.log('[LandingPage] workTokenDisplayName:', result)
  return result
})

// Синхронизируем данные из composable с wallet store при изменении балансов
watch(
  [paidBalance, workBalance, lockedTokens, paidTokenName, paidTokenSymbol, workTokenName, workTokenSymbol, paidDecimals, workDecimals, balancesLoading, balancesError],
  ([newPaid, newWork, newLocked, newPaidName, newPaidSymbol, newWorkName, newWorkSymbol, newPaidDecimals, newWorkDecimals, newLoading, newError]) => {
    console.log('[LandingPage] Watch сработал:', {
      newPaid: newPaid?.toString(),
      newWork: newWork?.toString(),
      newLocked: newLocked?.toString(),
      newPaidName,
      newPaidSymbol,
      newWorkName,
      newWorkSymbol,
      newPaidDecimals,
      newWorkDecimals,
      newLoading,
      newError
    })
    
    if (newPaid !== null) {
      wallet.setPaidBalance(newPaid)
    }
    if (newWork !== null) {
      wallet.setWorkBalance(newWork)
    }
    if (newLocked !== null) {
      wallet.setLockedTokens(newLocked)
    }
    if (newPaidName) {
      wallet.setPaidTokenName(newPaidName)
    }
    if (newPaidSymbol) {
      wallet.setPaidTokenSymbol(newPaidSymbol)
    }
    if (newWorkName) {
      wallet.setWorkTokenName(newWorkName)
    }
    if (newWorkSymbol) {
      wallet.setWorkTokenSymbol(newWorkSymbol)
    }
    if (newPaidDecimals !== undefined) {
      wallet.setPaidDecimals(newPaidDecimals)
    }
    if (newWorkDecimals !== undefined) {
      wallet.setWorkDecimals(newWorkDecimals)
    }
    wallet.setBalancesLoading(newLoading)
    wallet.setBalancesError(newError)
  },
  { immediate: true }
)

// Функция форматирования баланса (теперь просто возвращает значение, так как форматирование происходит в store)
const formatBalance = (value) => {
  console.log('[LandingPage] formatBalance called with:', value)
  if (!value) return '0'
  return value
}

// Обработчик кнопки обновления
const handleRefresh = async () => {
  await fetchBalances()
}

// Обработчик перевода токенов
const handleTransfer = async () => {
  transferError.value = ''
  transferSuccess.value = false
  
  if (!transferForm.value.recipientAddress || !transferForm.value.amount) {
    transferError.value = i18nStore.t('notify.fillAllFields')
    return
  }
  
  if (!/^0x[a-fA-F0-9]{40}$/.test(transferForm.value.recipientAddress)) {
    transferError.value = i18nStore.t('notify.invalidAddress')
    return
  }
  
  transferLoading.value = true
  try {
    await transferWorkTokens(
      transferForm.value.recipientAddress,
      transferForm.value.amount,
      workDecimals.value
    )
    transferSuccess.value = true
    transferForm.value.recipientAddress = ''
    transferForm.value.amount = ''
    // Обновить балансы
    await fetchBalances()
  } catch (error) {
    console.error('[LandingPage] Ошибка при переводе токенов:', safeLogError(error))
    
    // Проверяем, отменил ли пользователь транзакцию (код 4001)
    if (error.code === 4001 || (error.message && error.message.toLowerCase().includes('user rejected'))) {
      console.log('[LandingPage] Пользователь отменил транзакцию перевода')
      transferError.value = i18nStore.t('notify.transferCancelled')
      return
    }
    
    transferError.value = error.message || i18nStore.t('notify.transferError')
  } finally {
    transferLoading.value = false
  }
}
</script>

<style scoped>
.balances-section {
  animation: fadeIn 0.5s ease-in-out;
}

.balance-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.balance-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.wallet-not-connected {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.opacity-75 {
  opacity: 0.75;
}

.unlock-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.unlock-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.transfer-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.transfer-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
</style>
