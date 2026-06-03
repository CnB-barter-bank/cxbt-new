<template>
  <q-header>
    <q-toolbar>
      <q-toolbar-title data-test="header-title"> CXBT {{ tokenTranslation }} </q-toolbar-title>

      <span v-if="walletStore.isConnected && walletStore.address" data-test="wallet-address" class="q-ml-md">
        {{ formattedWalletAddress }}
      </span>

      <q-btn flat round dense data-test="wallet-connect-btn" @click="handleWalletClick">
        <q-icon :name="walletIcon" />
        <q-tooltip>{{ walletTooltipText }}</q-tooltip>
      </q-btn>

      <q-btn flat round dense data-test="language-switcher" @click="showLanguageDialog = true">
        <q-icon :name="languageIcon" />
        <q-tooltip>{{ currentLanguageName }}</q-tooltip>
      </q-btn>

      <span data-test="current-language" class="q-ml-sm">
        {{ currentLocale }}
      </span>
    </q-toolbar>
  </q-header>

  <q-dialog v-model="showLanguageDialog" data-test="language-dialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">
          {{ i18nStore.t('selectLanguage') || 'Select Language' }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-list>
          <q-item
            v-for="lang in i18nStore.availableLanguages"
            :key="lang.code"
            clickable
            :data-test="`language-item-${lang.code}`"
            @click="selectLanguage(lang.code)"
          >
            <q-item-section>
              <q-item-label :class="{ 'text-primary': lang.code === currentLocale }">
                {{ lang.name }}
              </q-item-label>
            </q-item-section>
            <q-item-section v-if="lang.code === currentLocale" side>
              <q-icon name="check" color="primary" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useI18nStore } from 'stores/i18n'
import { useWalletStore } from 'stores/wallet'
import { useWalletConnect } from '../composables/useWalletConnect.js'
import { computed, ref } from 'vue'

const i18nStore = useI18nStore()
const walletStore = useWalletStore()
const { connect, disconnect } = useWalletConnect()

const showLanguageDialog = ref(false)

const currentLocale = computed(() => i18nStore.currentLocale)

const tokenTranslation = computed(() => i18nStore.t('token'))

const currentLanguageName = computed(() => {
  const lang = i18nStore.availableLanguages.find(l => l.code === i18nStore.currentLanguage)
  return lang ? lang.name : ''
})

const languageIcon = computed(() => {
  return 'language'
})

// Wallet related computed properties
const walletIcon = computed(() => {
  return 'account_balance_wallet'
})

const formattedWalletAddress = computed(() => {
  console.log('[Header] formattedWalletAddress computed - isConnected:', walletStore.isConnected, 'address:', walletStore.address)
  if (walletStore.isConnected && walletStore.address) {
    const address = walletStore.address
    // Format: 0xabcd...efgh (4 chars after 0x + ... + 4 last chars)
    const formatted = `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
    console.log('[Header] Formatted address:', formatted)
    return formatted
  }
  console.log('[Header] Address not displayed - condition not met')
  return ''
})

const walletTooltipText = computed(() => {
  if (walletStore.isConnected && walletStore.address) {
    return walletStore.address
  }
  return i18nStore.t('wallet.connectTooltip')
})

// Handle wallet button click
async function handleWalletClick() {
  console.log('[Header] handleWalletClick called - isConnected:', walletStore.isConnected)
  if (walletStore.isConnected) {
    // If connected, disconnect
    console.log('[Header] Disconnecting wallet...')
    await disconnect()
  } else {
    // If not connected, connect
    console.log('[Header] Connecting wallet...')
    await connect()
    console.log('[Header] connect() returned')
  }
}

function selectLanguage(langCode) {
  i18nStore.setLocale(langCode)
  showLanguageDialog.value = false
}
</script>

<style scoped>
.q-ml-sm {
  margin-left: 0.5rem;
}

.q-ml-md {
  margin-left: 1rem;
}
</style>
