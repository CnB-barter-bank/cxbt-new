<script setup>
import WalletConnect from 'src/components/WalletConnect.vue'
import LanguageSelector from 'src/components/LanguageSelector.vue'
</script>

<template>
  <QLayout view="lHh lpr lFf">
    <QHeader elevated class="bg-primary text-white">
      <QToolbar>
        <QIcon name="account_balance_wallet" size="md" />
        <QToolbarTitle>
          {{ $t('layout.title') }}
        </QToolbarTitle>

        <LanguageSelector class="q-mr-sm" />
        <WalletConnect />
      </QToolbar>
    </QHeader>

    <QPageContainer>
      <RouterView />
    </QPageContainer>
  </QLayout>
</template>
