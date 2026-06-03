export default {
  token: 'Token',
  unlockTokens: 'CXBT-Tokens freischalten',
  unlockAmount: 'Betrag zum Freischalten',
  unlockPercentage: 'Freischalt-Prozentsatz',
  unlockCost: 'Kosten in PAID-Tokens',
  unlockButton: 'Freischalten',
  unlockingButton: 'Wird freigeschaltet...',
  unlockSuccess: 'Tokens erfolgreich freigeschaltet',
  unlockError: 'Fehler beim Freischalten der Tokens',
  insufficientLockedTokens: 'Nicht genügend gesperrte Tokens',
  invalidAmount: 'Ungültiger Betrag',
  
  selectLanguage: 'Sprache auswählen',
  
  page: {
    title: 'CXBT-Plattform',
    subtitle: 'Verwalten Sie Ihre {paidToken}- und {workToken}-Tokens',
  },
  
  balances: {
    title: 'Token-Bilanz',
    refresh: 'Bilanz aktualisieren',
    errorLoading: 'Fehler beim Laden der Bilanz',
    errorData: 'Daten konnten nicht abgerufen werden',
    loading: 'Bilanz wird geladen...',
    paidBalance: 'Bilanz',
    workBalance: 'Verfügbare Bilanz',
    lockedTokens: 'Gesperrte Tokens',
  },
  
  unlock: {
    title: 'CXBT-Tokens freischalten',
    description: 'Schalten Sie Ihre gesperrten Tokens frei',
    amountLabel: 'Anzahl der freizuschaltenden Tokens',
    amountMustBePositive: 'Betrag muss größer als 0 sein',
    insufficientLocked: 'Nicht genügend gesperrte Tokens',
    percentageLabel: 'Freischalt-Prozentsatz',
    costLabel: 'Kosten',
    button: 'Freischalten',
  },
  
  transfer: {
    title: 'CXBT-Tokens übertragen',
    description: 'Übertragen Sie CXBT-Tokens an eine andere Adresse',
    success: 'Tokens erfolgreich übertragen!',
    recipientLabel: 'Empfängeradresse',
    amountLabel: 'Token-Betrag',
    button: 'Übertragen',
  },
  
  wallet: {
    notConnected: 'Wallet nicht verbunden',
    connectPrompt: 'Verbinden Sie Ihre Wallet, um Ihre {paidToken}- und {workToken}-Token-Bilanz anzuzeigen',
    connectTooltip: 'Klicken, um Wallet zu verbinden',
    addTokenToWallet: 'Token zum Wallet hinzufügen',
  },
  
  notify: {
    unlockPercentageError: 'Fehler beim Abrufen des Freischalt-Prozentsatzes',
    unlockCostError: 'Fehler bei der Berechnung der Freischaltkosten',
    enterUnlockAmount: 'Bitte geben Sie die Anzahl der freizuschaltenden Tokens ein',
    insufficientLocked: 'Nicht genügend gesperrte Tokens',
    unlockSuccess: 'Tokens erfolgreich freigeschaltet!',
    transactionCancelled: 'Transaktion abgebrochen',
    transactionRejected: 'Sie haben die Transaktion in Ihrer Wallet abgelehnt',
    unlockError: 'Fehler beim Freischalten der Tokens',
    fillAllFields: 'Bitte füllen Sie alle Felder aus',
    invalidAddress: 'Ungültiges Adressformat',
    transferCancelled: 'Transaktion vom Benutzer abgebrochen',
    transferError: 'Fehler bei der Übertragung',
  },

  addToken: {
    addressNotConfigured: 'Token-Adresse ist nicht konfiguriert. Bitte überprüfen Sie VITE_WORK_TOKEN_ADDRESS',
    walletNotConnected: 'Bitte verbinden Sie Ihre Wallet, um den Token hinzuzufügen',
    methodNotSupported: 'Ihre Wallet unterstützt das Hinzufügen von Tokens nicht',
    success: 'Token erfolgreich hinzugefügt',
    cancelled: 'Token-Hinzufügen abgebrochen',
    error: 'Token konnte nicht hinzugefügt werden',
    rejected: 'Sie haben das Hinzufügen des Tokens abgelehnt',
    rpcError: 'Interner Wallet-Fehler. Bitte versuchen Sie es erneut',
  },
  
  tokens: {
    paidToken: 'PAID',
    workToken: 'CXBT',
  },
}
