export default {
  token: 'токен',
  unlockTokens: 'Разблокировать токены CXBT',
  unlockAmount: 'Сумма для разблокировки',
  unlockPercentage: 'Процент разблокировки',
  unlockCost: 'Стоимость в PAID токенах',
  unlockButton: 'Разблокировать',
  unlockingButton: 'Разблокировка...',
  unlockSuccess: 'Токены успешно разблокированы',
  unlockError: 'Ошибка при разблокировке токенов',
  insufficientLockedTokens: 'Недостаточно заблокированных токенов',
  invalidAmount: 'Некорректная сумма',
  
  selectLanguage: 'Выберите язык',
  
  page: {
    title: 'Платформа CXBT',
    subtitle: 'Управляйте вашими токенами {paidToken} и {workToken}',
  },
  
  balances: {
    title: 'Балансы токенов',
    refresh: 'Обновить балансы',
    errorLoading: 'Ошибка загрузки балансов',
    errorData: 'Не удалось получить данные',
    loading: 'Загрузка балансов...',
    paidBalance: 'Баланс',
    workBalance: 'Доступный баланс',
    lockedTokens: 'Заблокированные токены',
  },
  
  unlock: {
    title: 'Разблокировать токены CXBT',
    description: 'Разблокируйте ваши заблокированные токены',
    amountLabel: 'Количество токенов для разблокировки',
    amountMustBePositive: 'Сумма должна быть больше 0',
    insufficientLocked: 'Недостаточно заблокированных токенов',
    percentageLabel: 'Процент разблокировки',
    costLabel: 'Стоимость',
    button: 'Разблокировать',
  },
  
  transfer: {
    title: 'Перевести токены CXBT',
    description: 'Переведите токены CXBT на другой адрес',
    success: 'Токены успешно переведены!',
    recipientLabel: 'Адрес получателя',
    amountLabel: 'Количество токенов',
    button: 'Перевести',
  },
  
  wallet: {
    notConnected: 'Кошелёк не подключён',
    connectPrompt: 'Подключите кошелёк для просмотра балансов токенов {paidToken} и {workToken}',
    connectTooltip: 'Нажмите для подключения кошелька',
  },
  
  notify: {
    unlockPercentageError: 'Не удалось получить процент разблокировки',
    unlockCostError: 'Ошибка расчёта стоимости разблокировки',
    enterUnlockAmount: 'Пожалуйста, введите количество токенов для разблокировки',
    insufficientLocked: 'Недостаточно заблокированных токенов',
    unlockSuccess: 'Токены успешно разблокированы!',
    transactionCancelled: 'Транзакция отменена',
    transactionRejected: 'Вы отклонили транзакцию в кошельке',
    unlockError: 'Ошибка разблокировки токенов',
    fillAllFields: 'Пожалуйста, заполните все поля',
    invalidAddress: 'Неверный формат адреса',
    transferCancelled: 'Транзакция отменена пользователем',
    transferError: 'Ошибка при переводе',
  },
  
  tokens: {
    paidToken: 'PAID',
    workToken: 'CXBT',
  },
}
