<script setup>
import { ref, computed, watch } from 'vue'
import { useWalletStore } from 'src/stores/wallet'
import { useTokensStore } from 'src/stores/tokens'
import { useContract } from 'src/composables/useContract'
import { useQuasar, Notify, Dialog } from 'quasar'

const walletStore = useWalletStore()
const tokensStore = useTokensStore()
const contract = useContract()
const $q = useQuasar()

const recipient = ref('')
const amount = ref('')
const gasEstimate = ref('')
const estimatingGas = ref(false)

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
 * Форматированный доступный баланс для перевода
 */
const formatAvailableBalance = computed(() => {
  const balance = tokensStore.availableBalanceForTransfer
  try {
    const num = parseFloat(balance || '0')
    if (num === 0) return '0.000000'
    if (num < 0.000001) return '< 0.000001'
    return num.toFixed(6)
  } catch {
    return '0.000000'
  }
})

/**
 * Максимальное количество для перевода
 */
const maxTransferAmount = computed(() => {
  return parseFloat(tokensStore.availableBalanceForTransfer)
})

/**
 * Валидация адреса
 */
const validateAddress = () => {
  if (recipient.value && !contract.isValidAddress(recipient.value)) {
    return false
  }
  return true
}

/**
 * Оценить газ для перевода
 */
const estimateGas = async () => {
  if (
    !amount.value ||
    !recipient.value ||
    amount.value <= 0 ||
    !contract.isValidAddress(recipient.value)
  ) {
    gasEstimate.value = ''
    return
  }

  estimatingGas.value = true
  try {
    const gas = await contract.estimateTransferGas(recipient.value, amount.value.toString())
    gasEstimate.value = parseFloat(gas).toFixed(6)
  } catch (err) {
    // Не показываем ошибку для оценки газа, просто скрываем
    gasEstimate.value = ''
  } finally {
    estimatingGas.value = false
  }
}

/**
 * Установить максимальное количество
 */
const setMaxAmount = () => {
  amount.value = maxTransferAmount.value
  estimateGas()
}

/**
 * Обработать перевод токенов
 */
const handleTransfer = async () => {
  if (!amount.value || !recipient.value || amount.value <= 0) return

  try {
    // Проверка blacklisted статуса получателя
    const isBlacklisted = await contract.isBlacklistedRecipient(recipient.value)
    if (isBlacklisted) {
      Notify.create({
        type: 'negative',
        message: $t('transfer.transferErrorMessage'),
        caption: $t('transfer.recipientBlacklisted'),
        timeout: 5000
      })
      return
    }

    Dialog.create({
      title: $t('transfer.confirmTransfer'),
      message: $t('transfer.transferConfirmMessage', {
        amount: amount.value,
        address: `${recipient.value.slice(0, 8)}...${recipient.value.slice(-6)}`,
        gas: gasEstimate.value ? `\n\n${$t('transfer.estimatedFee')}: ${gasEstimate.value} ETH` : ''
      }),
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
        const gasNeeded = gasEstimate.value || '0.003'
        if (!(await checkSufficientEth(gasNeeded))) {
          return
        }

        await contract.transferTokens(recipient.value, amount.value.toString())

        // Очистить форму после успешной транзакции
        amount.value = ''
        recipient.value = ''
        gasEstimate.value = ''
      } catch (err) {
        Notify.create({
          type: 'negative',
          message: $t('transfer.transferErrorMessage'),
          caption: err.message,
          timeout: 5000
        })
      }
    })
  } catch (err) {
    Notify.create({
      type: 'negative',
      message: $t('transfer.recipientCheckError'),
      caption: err.message,
      timeout: 5000
    })
  }
}

/**
 * Очистить форму при отключении кошелька
 */
watch(
  () => walletStore.isConnected,
  isConnected => {
    if (!isConnected) {
      recipient.value = ''
      amount.value = ''
      gasEstimate.value = ''
    }
  }
)
</script>

<template>
  <QCard class="transfer-tokens">
    <QCardSection class="bg-accent text-white">
      <div class="text-h6">
        <QIcon name="send" class="q-mr-sm" />
        {{ $t('transfer.title') }}
      </div>
    </QCardSection>

    <QCardSection>
      <div v-if="!walletStore.isConnected" class="text-center q-pa-md">
        <QIcon name="warning" size="3em" color="warning" />
        <p class="q-mt-md text-grey-7">{{ $t('tokens.noWallet') }}</p>
      </div>

      <!-- Сообщение для blacklisted пользователей -->
      <div v-else-if="tokensStore.isBlacklisted" class="text-center q-pa-md">
        <QBanner class="bg-negative text-white">
          <template #avatar>
            <QIcon name="block" size="2em" />
          </template>
          <div class="text-subtitle1">{{ $t('userStatus.transfersNotAvailable') }}</div>
        </QBanner>
      </div>

      <QForm v-else @submit="handleTransfer" class="q-gutter-md">
        <!-- Баланс -->
        <div class="q-pa-sm bg-grey-2 rounded-borders">
          <div class="text-caption text-grey-7">
            <QIcon name="account_balance_wallet" class="q-mr-xs" />
            {{ $t('transfer.availableBalance') }} {{ formatAvailableBalance }} CXBT
          </div>
          <div
            v-if="tokensStore.canTransferLockedTokens"
            class="text-caption text-positive q-mt-xs"
          >
            <QIcon name="verified_user" class="q-mr-xs" />
            {{ $t('userStatus.canTransferLocked') }}
          </div>
        </div>

        <QInput
          v-model="recipient"
          :label="$t('transfer.recipientLabel')"
          outlined
          :rules="[
            val => !!val || $t('transfer.recipientRequired'),
            val => contract.isValidAddress(val) || $t('transfer.invalidAddress'),
            val =>
              val.toLowerCase() !== walletStore.address?.toLowerCase() ||
              $t('transfer.cannotSendToSelf')
          ]"
          @blur="validateAddress"
        >
          <template #append>
            <QIcon name="account_circle" />
          </template>
        </QInput>

        <QInput
          v-model.number="amount"
          type="number"
          :label="$t('transfer.amountLabel')"
          outlined
          :rules="[
            val => val > 0 || $t('transfer.amountPositive'),
            val => val <= maxTransferAmount || $t('transfer.exceedsAvailable')
          ]"
          :readonly="!tokensStore.canTransferTokens"
          min="0"
          step="0.000001"
          @update:modelValue="estimateGas"
        >
          <template #append>
            <QIcon name="token" />
          </template>
          <template #after>
            <QBtn
              flat
              dense
              round
              icon="maximize"
              :disable="!recipient || !contract.isValidAddress(recipient)"
              @click="setMaxAmount"
            />
          </template>
        </QInput>

        <!-- Отображение комиссии за газ -->
        <div v-if="estimatingGas" class="q-pa-sm bg-grey-3 rounded-borders">
          <QSpinner color="primary" size="1.5em" class="q-mr-sm" />
          <span>{{ $t('transfer.estimatingGas') }}</span>
        </div>
        <div v-else-if="gasEstimate" class="q-pa-sm bg-grey-2 rounded-borders">
          <div class="text-caption text-grey-7">
            <QIcon name="local_gas_station" class="q-mr-xs" />
            {{ $t('transfer.estimatedFee') }}: {{ gasEstimate }} ETH
          </div>
        </div>

        <QBtn
          type="submit"
          color="accent"
          :label="$t('transfer.sendButton')"
          class="full-width"
          :loading="contract.loading"
          :disable="!amount || !recipient || amount <= 0 || !tokensStore.canTransferTokens"
        >
          <template #loading>
            <QSpinnerHourglass class="on-left" />
            {{ $t('transfer.sending') }}
          </template>
        </QBtn>
      </QForm>
    </QCardSection>

    <!-- Успешная транзакция -->
    <QCardSection v-if="contract.txHash" class="bg-positive text-white">
      <div class="text-subtitle2">
        <QIcon name="check_circle" class="q-mr-sm" />
        {{ $t('transfer.transactionSent') }}
      </div>
      <div class="text-caption q-mt-sm">Hash: {{ contract.shortTxHash }}</div>
      <QBtn
        flat
        dense
        size="sm"
        :label="$t('transfer.viewInExplorer')"
        :href="contract.explorerUrl"
        target="_blank"
        class="q-mt-sm"
      />
    </QCardSection>
  </QCard>
</template>
