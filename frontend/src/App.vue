<script setup>
import WalletConnect from 'src/components/WalletConnect.vue'
</script>

<template>
  <QLayout view="lHh lpr lFf">
    <QHeader elevated class="bg-primary text-white">
      <QToolbar>
        <QIcon name="account_balance_wallet" size="md" />
        <QToolbarTitle> CXBT </QToolbarTitle>

        <WalletConnect />
      </QToolbar>
    </QHeader>

    <QPageContainer>
      <RouterView />
    </QPageContainer>
  </QLayout>
</template>
