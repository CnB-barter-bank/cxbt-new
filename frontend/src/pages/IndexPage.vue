<script setup>
import { useTokensStore } from 'src/stores/tokens'
import TokenBalances from 'src/components/TokenBalances.vue'
import UnlockTokens from 'src/components/UnlockTokens.vue'
import TransferTokens from 'src/components/TransferTokens.vue'

const tokensStore = useTokensStore()
</script>

<template>
  <QPage class="q-pa-md">
    <div class="text-center q-mb-xl">
      <h1 class="text-h4 text-primary q-mb-md">{{ $t('dashboard.title') }}</h1>
      <p class="text-subtitle1 text-grey-7">
        {{ $t('dashboard.description') }}
      </p>
    </div>

    <!-- Баннер для blacklisted пользователей -->
    <QBanner v-if="tokensStore.isBlacklisted" class="bg-negative text-white q-mb-md">
      <template #avatar>
        <QIcon name="block" size="2em" />
      </template>
      <div class="text-h6">{{ $t('userStatus.accountRestricted') }}</div>
      <div class="text-caption q-mt-sm">
        {{ $t('userStatus.transfersNotAvailable') }}
      </div>
    </QBanner>

    <!-- Баннер для whitelisted пользователей -->
    <QBanner v-else-if="tokensStore.isWhitelisted" class="bg-positive text-white q-mb-md">
      <template #avatar>
        <QIcon name="verified_user" size="2em" />
      </template>
      <div class="text-h6">{{ $t('userStatus.specialPrivileges') }}</div>
      <div class="text-caption q-mt-sm">
        {{ $t('userStatus.allTokensUnlocked') }}
      </div>
    </QBanner>

    <div class="row q-col-gutter-md">
      <!-- Token Balances -->
      <div class="col-12">
        <TokenBalances />
      </div>

      <!-- Unlock Tokens -->
      <div class="col-12 col-md-6">
        <UnlockTokens />
      </div>

      <!-- Transfer Tokens -->
      <div class="col-12 col-md-6">
        <TransferTokens />
      </div>
    </div>
  </QPage>
</template>
