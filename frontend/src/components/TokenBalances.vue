<script setup>
import { ref, onMounted, watch } from 'vue'
import { useWalletStore } from 'src/stores/wallet'
import { useTokensStore } from 'src/stores/tokens'

const walletStore = useWalletStore()
const tokensStore = useTokensStore()
const debouncing = ref(false)

/**
 * Обновить балансы с debouncing
 */
const handleRefresh = async () => {
  if (debouncing.value) return

  debouncing.value = true
  await tokensStore.refreshData()

  // Debouncing: предотвращаем повторные нажатия в течение 1 секунды
  setTimeout(() => {
    debouncing.value = false
  }, 1000)
}

/**
 * Обновить балансы при подключении кошелька
 */
watch(
  () => walletStore.isConnected,
  async isConnected => {
    if (isConnected) {
      await tokensStore.refreshData()
    } else {
      tokensStore.reset()
    }
  }
)

/**
 * Загрузить балансы при монтировании компонента
 */
onMounted(async () => {
  if (walletStore.isConnected) {
    await tokensStore.refreshData()
  }
})
</script>

<template>
  <QCard class="token-balances">
    <QCardSection class="bg-primary text-white">
      <div class="text-h6">
        <QIcon name="account_balance" class="q-mr-sm" />
        {{ $t('tokens.balances') }}
      </div>
    </QCardSection>

    <QCardSection>
      <div v-if="tokensStore.loading" class="text-center q-pa-md">
        <QSpinner color="primary" size="3em" />
        <p class="q-mt-md text-grey-7">{{ $t('tokens.loadingBalances') }}</p>
      </div>

      <div v-else-if="tokensStore.error" class="text-center q-pa-md">
        <QBanner class="bg-negative text-white">
          <template #avatar>
            <QIcon name="error" size="2em" />
          </template>
          <div class="text-subtitle1">{{ $t('common.error') }}</div>
          <div class="text-caption q-mt-sm">{{ tokensStore.error }}</div>
        </QBanner>
      </div>

      <div v-else-if="!walletStore.isConnected" class="text-center q-pa-md">
        <QIcon name="warning" size="3em" color="warning" />
        <p class="q-mt-md text-grey-7">{{ $t('tokens.noWallet') }}</p>
      </div>

      <div v-else>
        <!-- Статус пользователя -->
        <div class="q-mb-md">
          <QChip :color="tokensStore.statusColor" text-color="white" icon="verified_user" size="md">
            {{ tokensStore.statusLabel }}
          </QChip>
        </div>

        <!-- Балансы CXBT -->
        <QList separator>
          <QItem>
            <QItemSection avatar>
              <QAvatar color="primary" text-color="white" size="md"> C </QAvatar>
            </QItemSection>

            <QItemSection>
              <QItemLabel>CXBT Token</QItemLabel>
              <QItemLabel caption>CXBT</QItemLabel>
            </QItemSection>

            <QItemSection side>
              <QItemLabel class="text-subtitle1 text-weight-bold">
                {{ tokensStore.formattedBalances.total }}
              </QItemLabel>
              <QItemLabel caption>{{ $t('tokens.total') }}</QItemLabel>
            </QItemSection>
          </QItem>

          <QItem>
            <QItemSection avatar>
              <QAvatar color="positive" text-color="white" size="md">
                <QIcon name="lock_open" />
              </QAvatar>
            </QItemSection>

            <QItemSection>
              <QItemLabel>{{ $t('tokens.unlocked') }}</QItemLabel>
              <QItemLabel caption>{{ $t('tokens.availableForTransfer') }}</QItemLabel>
            </QItemSection>

            <QItemSection side>
              <QItemLabel class="text-subtitle1 text-weight-bold text-positive">
                {{ tokensStore.formattedBalances.unlocked }}
              </QItemLabel>
              <QItemLabel caption>CXBT</QItemLabel>
            </QItemSection>
          </QItem>

          <!-- Заблокированные токены - скрываем для whitelisted -->
          <QItem v-if="!tokensStore.isWhitelisted">
            <QItemSection avatar>
              <QAvatar color="warning" text-color="white" size="md">
                <QIcon name="lock" />
              </QAvatar>
            </QItemSection>

            <QItemSection>
              <QItemLabel>{{ $t('tokens.locked') }}</QItemLabel>
              <QItemLabel caption>{{ $t('tokens.requiresUnlock') }}</QItemLabel>
            </QItemSection>

            <QItemSection side>
              <QItemLabel class="text-subtitle1 text-weight-bold text-warning">
                {{ tokensStore.formattedBalances.locked }}
              </QItemLabel>
              <QItemLabel caption>CXBT</QItemLabel>
            </QItemSection>
          </QItem>

          <!-- Баланс PAID -->
          <QItem>
            <QItemSection avatar>
              <QAvatar color="secondary" text-color="white" size="md"> P </QAvatar>
            </QItemSection>

            <QItemSection>
              <QItemLabel>PAID Token</QItemLabel>
              <QItemLabel caption>{{ $t('tokens.forUnlockPayment') }}</QItemLabel>
            </QItemSection>

            <QItemSection side>
              <QItemLabel class="text-subtitle1 text-weight-bold">
                {{ tokensStore.formattedBalances.paid }}
              </QItemLabel>
              <QItemLabel caption>PAID</QItemLabel>
            </QItemSection>
          </QItem>
        </QList>
      </div>
    </QCardSection>

    <QCardActions align="right">
      <QBtn
        flat
        color="primary"
        :label="$t('common.refresh')"
        icon="refresh"
        :loading="tokensStore.loading"
        :disable="!walletStore.isConnected || debouncing"
        @click="handleRefresh"
      />
    </QCardActions>
  </QCard>
</template>

<style scoped>
.token-balances {
  min-height: 300px;
}
</style>
