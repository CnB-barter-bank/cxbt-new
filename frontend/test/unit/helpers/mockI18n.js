import { createI18n } from 'vue-i18n'

/**
 * Mock i18n instance for testing
 */
export const createMockI18n = (locale = 'en') => {
  const messages = {
    en: {
      wallet: {
        connect: 'Connect Wallet',
        disconnect: 'Disconnect',
        copyAddress: 'Copy Address',
        addressCopied: 'Address copied to clipboard',
        switchToBase: 'Switch to Base'
      },
      tokens: {
        balances: 'Token Balances',
        loadingBalances: 'Loading balances...',
        noWallet: 'Please connect your wallet',
        total: 'Total',
        unlocked: 'Unlocked',
        locked: 'Locked',
        availableForTransfer: 'Available for transfer',
        requiresUnlock: 'Requires unlock',
        forUnlockPayment: 'For unlock payment'
      },
      unlock: {
        title: 'Unlock Tokens',
        amountLabel: 'Amount to unlock',
        amountPositive: 'Amount must be greater than 0',
        exceedsLocked: 'Amount exceeds locked balance',
        unlockingCost: 'Unlocking Cost',
        approved: 'Approved',
        approveButton: 'Approve PAID',
        approving: 'Approving...',
        unlockButton: 'Unlock',
        unlocking: 'Unlocking...',
        transactionSent: 'Transaction sent',
        viewInExplorer: 'View in Explorer'
      },
      transfer: {
        title: 'Transfer Tokens',
        availableBalance: 'Available Balance',
        recipientLabel: 'Recipient Address',
        recipientRequired: 'Recipient address is required',
        invalidAddress: 'Invalid address',
        cannotSendToSelf: 'Cannot send to yourself',
        amountLabel: 'Amount',
        amountPositive: 'Amount must be greater than 0',
        exceedsAvailable: 'Amount exceeds available balance',
        sendButton: 'Send',
        sending: 'Sending...',
        transactionSent: 'Transaction sent',
        viewInExplorer: 'View in Explorer'
      },
      userStatus: {
        allTokensUnlocked: 'All your tokens are already unlocked',
        unlockNotAvailable: 'Unlock is not available for your account',
        transfersNotAvailable: 'Transfers are not available for your account',
        canTransferLocked: 'You can transfer locked tokens'
      },
      notifications: {
        walletConnected: 'Wallet connected successfully',
        walletDisconnected: 'Wallet disconnected',
        networkSwitched: 'Network switched to Base',
        transactionFailed: 'Transaction failed'
      },
      common: {
        close: 'Close',
        refresh: 'Refresh'
      }
    },
    ru: {
      wallet: {
        connect: 'Подключить кошелек',
        disconnect: 'Отключить',
        copyAddress: 'Копировать адрес',
        addressCopied: 'Адрес скопирован в буфер обмена',
        switchToBase: 'Переключиться на Base'
      },
      tokens: {
        balances: 'Балансы токенов',
        loadingBalances: 'Загрузка балансов...',
        noWallet: 'Пожалуйста, подключите кошелек',
        total: 'Всего',
        unlocked: 'Разблокировано',
        locked: 'Заблокировано',
        availableForTransfer: 'Доступно для перевода',
        requiresUnlock: 'Требует разблокировки',
        forUnlockPayment: 'Для оплаты разблокировки'
      },
      unlock: {
        title: 'Разблокировка токенов',
        amountLabel: 'Количество для разблокировки',
        amountPositive: 'Количество должно быть больше 0',
        exceedsLocked: 'Количество превышает заблокированный баланс',
        unlockingCost: 'Стоимость разблокировки',
        approved: 'Одобрено',
        approveButton: 'Одобрить PAID',
        approving: 'Одобрение...',
        unlockButton: 'Разблокировать',
        unlocking: 'Разблокировка...',
        transactionSent: 'Транзакция отправлена',
        viewInExplorer: 'Посмотреть в Explorer'
      },
      transfer: {
        title: 'Перевод токенов',
        availableBalance: 'Доступный баланс',
        recipientLabel: 'Адрес получателя',
        recipientRequired: 'Адрес получателя обязателен',
        invalidAddress: 'Неверный адрес',
        cannotSendToSelf: 'Нельзя отправить самому себе',
        amountLabel: 'Количество',
        amountPositive: 'Количество должно быть больше 0',
        exceedsAvailable: 'Количество превышает доступный баланс',
        sendButton: 'Отправить',
        sending: 'Отправка...',
        transactionSent: 'Транзакция отправлена',
        viewInExplorer: 'Посмотреть в Explorer'
      },
      userStatus: {
        allTokensUnlocked: 'Все ваши токены уже разблокированы',
        unlockNotAvailable: 'Разблокировка недоступна для вашего аккаунта',
        transfersNotAvailable: 'Переводы недоступны для вашего аккаунта',
        canTransferLocked: 'Вы можете переводить заблокированные токены'
      },
      notifications: {
        walletConnected: 'Кошелек успешно подключен',
        walletDisconnected: 'Кошелек отключен',
        networkSwitched: 'Сеть переключена на Base',
        transactionFailed: 'Транзакция не удалась'
      },
      common: {
        close: 'Закрыть',
        refresh: 'Обновить'
      }
    }
  }

  return createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages
  })
}

/**
 * Mock $t function for component tests
 */
export const mockT = key => {
  const messages = {
    'wallet.connect': 'Connect Wallet',
    'wallet.disconnect': 'Disconnect',
    'wallet.copyAddress': 'Copy Address',
    'wallet.addressCopied': 'Address copied to clipboard',
    'wallet.switchToBase': 'Switch to Base',
    'tokens.balances': 'Token Balances',
    'tokens.loadingBalances': 'Loading balances...',
    'tokens.noWallet': 'Please connect your wallet',
    'tokens.total': 'Total',
    'tokens.unlocked': 'Unlocked',
    'tokens.locked': 'Locked',
    'tokens.availableForTransfer': 'Available for transfer',
    'tokens.requiresUnlock': 'Requires unlock',
    'tokens.forUnlockPayment': 'For unlock payment',
    'unlock.title': 'Unlock Tokens',
    'unlock.amountLabel': 'Amount to unlock',
    'unlock.amountPositive': 'Amount must be greater than 0',
    'unlock.exceedsLocked': 'Amount exceeds locked balance',
    'unlock.unlockingCost': 'Unlocking Cost',
    'unlock.approved': 'Approved',
    'unlock.approveButton': 'Approve PAID',
    'unlock.approving': 'Approving...',
    'unlock.unlockButton': 'Unlock',
    'unlock.unlocking': 'Unlocking...',
    'unlock.transactionSent': 'Transaction sent',
    'unlock.viewInExplorer': 'View in Explorer',
    'transfer.title': 'Transfer Tokens',
    'transfer.availableBalance': 'Available Balance',
    'transfer.recipientLabel': 'Recipient Address',
    'transfer.recipientRequired': 'Recipient address is required',
    'transfer.invalidAddress': 'Invalid address',
    'transfer.cannotSendToSelf': 'Cannot send to yourself',
    'transfer.amountLabel': 'Amount',
    'transfer.amountPositive': 'Amount must be greater than 0',
    'transfer.exceedsAvailable': 'Amount exceeds available balance',
    'transfer.sendButton': 'Send',
    'transfer.sending': 'Sending...',
    'transfer.transactionSent': 'Transaction sent',
    'transfer.viewInExplorer': 'View in Explorer',
    'userStatus.allTokensUnlocked': 'All your tokens are already unlocked',
    'userStatus.unlockNotAvailable': 'Unlock is not available for your account',
    'userStatus.transfersNotAvailable': 'Transfers are not available for your account',
    'userStatus.canTransferLocked': 'You can transfer locked tokens',
    'notifications.walletConnected': 'Wallet connected successfully',
    'notifications.walletDisconnected': 'Wallet disconnected',
    'notifications.networkSwitched': 'Network switched to Base',
    'notifications.transactionFailed': 'Transaction failed',
    'common.close': 'Close',
    'common.refresh': 'Refresh'
  }

  return messages[key] || key
}
