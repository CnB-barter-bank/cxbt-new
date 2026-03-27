<script setup>
import { ref, onMounted } from 'vue'
import { useWalletStore } from '../stores/wallet'
import { useQuasar, Notify } from 'quasar'
import { WEB3_CONFIG } from '../config/web3'

const wallet = useWalletStore()
const $q = useQuasar()
const switchingNetwork = ref(false)

/**
 * Унифицированная функция для отображения уведомлений
 */
const showNotification = (type, message, caption = null) => {
  Notify.create({
    type,
    message,
    caption,
    position: 'top',
    timeout: type === 'negative' ? 5000 : 3000
  })
}

const handleConnect = async () => {
  const result = await wallet.connectWallet()

  if (result.success) {
    showNotification('positive', $t('notifications.walletConnected'))
  } else {
    showNotification('negative', result.error)
  }
}

const handleDisconnect = () => {
  wallet.disconnectWallet()
  showNotification('info', $t('notifications.walletDisconnected'))
}

const handleSwitchNetwork = async () => {
  switchingNetwork.value = true
  try {
    await wallet.switchNetwork(WEB3_CONFIG.base.chainId)
    showNotification('positive', $t('notifications.networkSwitched'))
  } catch (error) {
    showNotification('negative', error.message || $t('notifications.transactionFailed'))
  } finally {
    switchingNetwork.value = false
  }
}

const copyAddress = () => {
  if (wallet.address) {
    // Проверка navigator.clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(wallet.address)
        .then(() => {
          showNotification('positive', $t('wallet.addressCopied'))
        })
        .catch(() => {
          // Fallback для старых браузеров
          fallbackCopyToClipboard(wallet.address)
        })
    } else {
      // Fallback если navigator.clipboard недоступен
      fallbackCopyToClipboard(wallet.address)
    }
  }
}

/**
 * Fallback метод для копирования в буфер обмена
 */
const fallbackCopyToClipboard = text => {
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.position = 'fixed'
  textArea.style.left = '-9999px'
  document.body.appendChild(textArea)
  textArea.select()

  try {
    document.execCommand('copy')
    showNotification('positive', $t('wallet.addressCopied'))
  } catch (err) {
    showNotification('negative', $t('wallet.copyFailed'))
  }

  document.body.removeChild(textArea)
}

onMounted(async () => {
  // Check for existing wallet connection on mount
  await wallet.checkConnection()
})
</script>

<template>
  <div class="wallet-connect">
    <QBtn
      v-if="!wallet.isConnected"
      color="white"
      textColor="primary"
      :label="$t('wallet.connect')"
      :loading="wallet.loading"
      outline
      noCaps
      @click="handleConnect"
    />
    <div v-else class="wallet-info row items-center q-gutter-sm">
      <!-- Network indicator -->
      <QChip
        v-if="wallet.currentChain"
        :label="wallet.currentChain.name"
        :color="wallet.isBaseNetwork ? 'positive' : 'warning'"
        textColor="white"
        size="sm"
        dense
      >
        <QIcon
          :name="wallet.isBaseNetwork ? 'check_circle' : 'warning'"
          size="16px"
          class="q-mr-xs"
        />
      </QChip>

      <!-- Address chip -->
      <QChip
        :label="wallet.shortAddress"
        color="white"
        textColor="primary"
        size="md"
        icon="account_balance_wallet"
        clickable
        @click="copyAddress"
      >
        <QTooltip>{{ $t('wallet.copyAddress') }}</QTooltip>
      </QChip>

      <!-- Switch to Base button -->
      <QBtn
        v-if="!wallet.isBaseNetwork"
        flat
        dense
        color="warning"
        :label="$t('wallet.switchToBase')"
        icon="swap_horiz"
        :loading="switchingNetwork"
        noCaps
        @click="handleSwitchNetwork"
      >
        <QTooltip>{{ $t('wallet.switchToBase') }}</QTooltip>
      </QBtn>

      <!-- Disconnect button -->
      <QBtn flat dense round icon="logout" color="white" @click="handleDisconnect">
        <QTooltip>{{ $t('wallet.disconnect') }}</QTooltip>
      </QBtn>
    </div>

    <!-- Error notification -->
    <QBanner v-if="wallet.error" class="text-negative q-mt-sm" dense rounded>
      <template #avatar>
        <QIcon name="error" />
      </template>
      {{ wallet.error }}
      <template #action>
        <QBtn flat dense :label="$t('common.close')" @click="wallet.error = null" />
      </template>
    </QBanner>
  </div>
</template>

<style scoped>
.wallet-connect {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.wallet-info {
  display: flex;
  align-items: center;
}
</style>
