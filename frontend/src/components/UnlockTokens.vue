<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useWalletStore } from 'src/stores/wallet'
import { useTokensStore } from 'src/stores/tokens'
import { useContract } from 'src/composables/useContract'
import { useQuasar, Notify, Dialog } from 'quasar'
import { ethers } from 'ethers'

const walletStore = useWalletStore()
const tokensStore = useTokensStore()
const contract = useContract()
const $q = useQuasar()

const amount = ref('')
const unlockCost = ref('0')
const paidAllowance = ref('0')
const calculatingCost = ref(false)

/**
 * Проверить достаточно ли ETH для газа
 * @param {string} estimatedGas - оценка газа в ETH
 * @returns {boolean} true если достаточно ETH
 */
const checkSufficientEth = async (estimatedGas = '0.001') => {
  try {
    const balance = parseFloat(walletStore.balance)
    const required = parseFloat(estimatedGas)
    const buffer = required * 2 // 2x буфер для безопасности

    if (balance < buffer) {
      Notify.create({
        type: 'negative',
        message: $t('errors.insufficientEth'),
        caption: `Required: ${buffer.toFixed(6)} ETH, Available: ${balance.toFixed(6)} ETH`,
        timeout: 5000
      })
      return false
    }
    return true
  } catch (err) {
    console.error('Error checking ETH balance:', err)
    return false
  }
}

/**
 * Рассчитать стоимость разблокировки
 */
const calculateCost = async () => {
  if (!amount.value || amount.value <= 0) {
    unlockCost.value = '0'
    return
  }

  calculatingCost.value = true
  try {
    const cost = await contract.calculateUnlockCost(amount.value.toString())
    unlockCost.value = parseFloat(cost).toFixed(6)
  } catch (err) {
    Notify.create({
      type: 'negative',
      message: $t('unlock.costCalculationError'),
      caption: err.message,
      timeout: 5000
    })
    unlockCost.value = '0'
  } finally {
    calculatingCost.value = false
  }
}

/**
 * Проверить достаточно ли allowance
 */
const hasEnoughAllowance = computed(() => {
  if (!unlockCost.value || parseFloat(unlockCost.value) <= 0) return false
  return parseFloat(paidAllowance.value) >= parseFloat(unlockCost.value)
})

/**
 * Обработать approve PAID токенов
 */
const handleApprove = async () => {
  if (!amount.value || amount.value <= 0) return

  Dialog.create({
    title: $t('unlock.confirmApprove'),
    message: $t('unlock.approveConfirmMessage', { amount: unlockCost.value }),
    cancel: true,
    persistent: true
  }).onOk(async () => {
    try {
      // Проверяем paused состояние контракта
      const isPaused = await contract.isContractPaused()
      if (isPaused) {
        Notify.create({
          type: 'negative',
          message: $t('errors.contractPaused'),
          timeout: 5000
        })
        return
      }

      // Проверяем баланс ETH
      if (!(await checkSufficientEth('0.002'))) {
        return
      }

      // Approve с небольшим запасом
      const approveAmount = (parseFloat(unlockCost.value) * 2).toString()
      await contract.approvePaidTokens(approveAmount)

      // Обновляем allowance
      await fetchAllowance()
    } catch (err) {
      Notify.create({
        type: 'negative',
        message: $t('unlock.approveError'),
        caption: err.message,
        timeout: 5000
      })
    }
  })
}

/**
 * Обработать разблокировку токенов
 */
const handleUnlock = async () => {
  if (!amount.value || amount.value <= 0) return

  Dialog.create({
    title: $t('unlock.confirmUnlock'),
    message: $t('unlock.unlockConfirmMessage', { amount: amount.value, cost: unlockCost.value }),
    cancel: true,
    persistent: true
  }).onOk(async () => {
    try {
      // Проверяем paused состояние контракта
      const isPaused = await contract.isContractPaused()
      if (isPaused) {
        Notify.create({
          type: 'negative',
          message: $t('errors.contractPaused'),
          timeout: 5000
        })
        return
      }

      // Проверяем баланс ETH
      if (!(await checkSufficientEth('0.003'))) {
        return
      }

      await contract.unlockTokens(amount.value.toString())

      // Очистить форму после успешной транзакции
      amount.value = ''
      unlockCost.value = '0'
    } catch (err) {
      Notify.create({
        type: 'negative',
        message: $t('unlock.unlockErrorMessage'),
        caption: err.message,
        timeout: 5000
      })
    }
  })
}

/**
 * Получить allowance PAID токенов
 */
const fetchAllowance = async () => {
  try {
    paidAllowance.value = await contract.getPaidAllowance()
  } catch (err) {
    Notify.create({
      type: 'negative',
      message: $t('unlock.allowanceError'),
      caption: err.message,
      timeout: 5000
    })
    paidAllowance.value = '0'
  }
}

/**
 * Обновить allowance при изменении кошелька
 */
watch(
  () => walletStore.isConnected,
  async isConnected => {
    if (isConnected) {
      await fetchAllowance()
    } else {
      paidAllowance.value = '0'
    }
  }
)

/**
 * Загрузить allowance при монтировании
 */
onMounted(async () => {
  if (walletStore.isConnected) {
    await fetchAllowance()
  }
})
</script>

<template>
  <QCard class="unlock-tokens">
    <QCardSection class="bg-secondary text-white">
      <div class="text-h6">
        <QIcon name="lock_open" class="q-mr-sm" />
        {{ $t('unlock.title') }}
      </div>
    </QCardSection>

    <QCardSection>
      <div v-if="!walletStore.isConnected" class="text-center q-pa-md">
        <QIcon name="warning" size="3em" color="warning" />
        <p class="q-mt-md text-grey-7">{{ $t('tokens.noWallet') }}</p>
      </div>

      <!-- Сообщение для whitelisted пользователей -->
      <div v-else-if="tokensStore.isWhitelisted" class="text-center q-pa-md">
        <QBanner class="bg-positive text-white">
          <template #avatar>
            <QIcon name="check_circle" size="2em" />
          </template>
          <div class="text-subtitle1">{{ $t('userStatus.allTokensUnlocked') }}</div>
        </QBanner>
      </div>

      <!-- Сообщение для blacklisted пользователей -->
      <div v-else-if="tokensStore.isBlacklisted" class="text-center q-pa-md">
        <QBanner class="bg-negative text-white">
          <template #avatar>
            <QIcon name="block" size="2em" />
          </template>
          <div class="text-subtitle1">{{ $t('userStatus.unlockNotAvailable') }}</div>
        </QBanner>
      </div>

      <QForm v-else-if="tokensStore.canUnlockTokens" @submit="handleUnlock" class="q-gutter-md">
        <!-- Баланс PAID токенов -->
        <div class="q-pa-sm bg-grey-2 rounded-borders">
          <div class="text-caption text-grey-7">
            <QIcon name="account_balance_wallet" class="q-mr-xs" />
            Баланс PAID: {{ tokensStore.formattedBalances.paid }} PAID
          </div>
          <div class="text-caption text-grey-7 q-mt-xs">
            <QIcon name="lock" class="q-mr-xs" />
            Заблокировано CXBT: {{ tokensStore.formattedBalances.locked }}
          </div>
        </div>

        <QInput
          v-model.number="amount"
          type="number"
          :label="$t('unlock.amountLabel')"
          outlined
          :rules="[
            val => val > 0 || $t('unlock.amountPositive'),
            val => val <= parseFloat(tokensStore.lockedBalance) || $t('unlock.exceedsLocked')
          ]"
          min="0"
          step="0.000001"
          @update:modelValue="calculateCost"
        >
          <template #append>
            <QIcon name="token" />
          </template>
        </QInput>

        <!-- Стоимость разблокировки с индикатором загрузки -->
        <div v-if="calculatingCost" class="q-pa-sm bg-info text-white rounded-borders">
          <QSpinner color="white" size="1.5em" class="q-mr-sm" />
          <span>{{ $t('unlock.calculatingCost') }}</span>
        </div>
        <div v-else-if="unlockCost" class="q-pa-sm bg-info text-white rounded-borders">
          <div class="text-subtitle2">
            <QIcon name="info" class="q-mr-xs" />
            {{ $t('unlock.unlockingCost') }}
          </div>
          <div class="text-h6 q-mt-sm">{{ unlockCost }} PAID</div>
        </div>

        <!-- Allowance -->
        <div class="q-pa-sm bg-grey-2 rounded-borders">
          <div class="text-caption text-grey-7">
            <QIcon name="verified" class="q-mr-xs" />
            {{ $t('unlock.approved') }}: {{ paidAllowance }} PAID
          </div>
        </div>

        <!-- Кнопки -->
        <div class="q-gutter-sm">
          <QBtn
            v-if="!hasEnoughAllowance"
            color="info"
            :label="$t('unlock.approveButton')"
            class="full-width"
            :loading="contract.loading"
            :disable="!amount || amount <= 0"
            @click="handleApprove"
          >
            <template #loading>
              <QSpinnerHourglass class="on-left" />
              {{ $t('unlock.approving') }}
            </template>
          </QBtn>

          <QBtn
            type="submit"
            color="secondary"
            :label="$t('unlock.unlockButton')"
            class="full-width"
            :loading="contract.loading"
            :disable="!amount || amount <= 0 || !hasEnoughAllowance"
          >
            <template #loading>
              <QSpinnerHourglass class="on-left" />
              {{ $t('unlock.unlocking') }}
            </template>
          </QBtn>
        </div>
      </QForm>
    </QCardSection>

    <!-- Успешная транзакция -->
    <QCardSection v-if="contract.txHash" class="bg-positive text-white">
      <div class="text-subtitle2">
        <QIcon name="check_circle" class="q-mr-sm" />
        {{ $t('unlock.transactionSent') }}
      </div>
      <div class="text-caption q-mt-sm">Hash: {{ contract.shortTxHash }}</div>
      <QBtn
        flat
        dense
        size="sm"
        :label="$t('unlock.viewInExplorer')"
        :href="contract.explorerUrl"
        target="_blank"
        class="q-mt-sm"
      />
    </QCardSection>
  </QCard>
</template>

<style scoped>
.unlock-tokens {
  min-height: 400px;
}
</style>
