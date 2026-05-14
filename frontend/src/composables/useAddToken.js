import { useI18n } from 'vue-i18n'
import { useWalletStore } from 'src/stores/wallet'
import { Notify } from 'quasar'
import { wagmiConfig } from './useWalletConnect'

/**
 * Composable для добавления токена в кошелёк пользователя
 * Использует стандартный метод wallet_watchAsset (EIP-747)
 * @returns {Object} Объект с функциями добавления токена
 */
export function useAddToken() {
  console.log('[useAddToken] Инициализация composable')

  const { t } = useI18n()
  const walletStore = useWalletStore()

  /**
   * Добавляет токен в кошелёк пользователя
   * Работает как с расширениями браузера (MetaMask и др.), так и с WalletConnect
   * @param {Object} options - Опциональные параметры токена
   * @param {string} options.address - Адрес токена (по умолчанию из store)
   * @param {string} options.symbol - Символ токена (по умолчанию из store)
   * @param {number} options.decimals - Decimals токена (по умолчанию из store)
   * @param {string} options.image - URL логотипа токена
   * @returns {Promise<boolean>} true если токен успешно добавлен, false в противном случае
   */
  const addTokenToWallet = async (options = {}) => {
    console.log('[useAddToken] addTokenToWallet вызван')

    try {
      // Получаем данные токена из параметров или из store
      const tokenAddress = options.address || import.meta.env.VITE_WORK_TOKEN_ADDRESS
      const tokenSymbol = options.symbol || walletStore.workTokenSymbol || 'CXBT'
      const tokenDecimals = options.decimals || walletStore.workDecimals || 18
      const tokenImage = options.image || 'https://cxbt.io/token-logo.png'

      console.log('[useAddToken] Данные токена:', {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage,
      })

      // Проверяем, что адрес токена указан
      if (!tokenAddress) {
        const errorMsg = t('addToken.addressNotConfigured')
        console.error('[useAddToken]', errorMsg)
        Notify.create({
          type: 'negative',
          message: errorMsg,
          position: 'top',
          timeout: 5000,
        })
        return false
      }

      // Проверяем, что кошелёк подключён
      if (!walletStore.isConnected) {
        const errorMsg = t('addToken.walletNotConnected')
        console.error('[useAddToken]', errorMsg)
        Notify.create({
          type: 'negative',
          message: errorMsg,
          position: 'top',
          timeout: 5000,
        })
        return false
      }

      // Определяем провайдер для вызова метода
      // Приоритет: window.ethereum (расширения браузера) > walletProvider (WalletConnect)
      let provider = null

      if (window.ethereum?.request) {
        // Расширение браузера (MetaMask, Trust Wallet и др.)
        provider = window.ethereum
        console.log('[useAddToken] Используется провайдер window.ethereum')
      } else {
        // WalletConnect или другой провайдер через wagmi
        // Получаем connector client для доступа к провайдеру
        try {
          const { getConnectorClient } = await import('@wagmi/core')
          
          // getConnectorClient требует параметр account в wagmi v3.x
          const connectorClient = await getConnectorClient(wagmiConfig, {
            account: walletStore.address
          })
          if (connectorClient?.wallet?.request) {
            provider = connectorClient.wallet
            console.log('[useAddToken] Используется провайдер WalletConnect')
          }
        } catch (error) {
          console.error('[useAddToken] Ошибка при получении connector client:', error)
        }
      }

      // Проверяем поддержку метода wallet_watchAsset
      if (!provider?.request) {
        const errorMsg = t('addToken.methodNotSupported')
        console.error('[useAddToken]', errorMsg)
        Notify.create({
          type: 'negative',
          message: errorMsg,
          position: 'top',
          timeout: 5000,
        })
        return false
      }

      // Добавляем токен через wallet_watchAsset
      console.log('[useAddToken] Вызов метода wallet_watchAsset')
      
      const wasAdded = await provider.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      })

      console.log('[useAddToken] Результат добавления токена:', wasAdded)

      if (wasAdded) {
        Notify.create({
          type: 'positive',
          message: t('addToken.success'),
          position: 'top',
          timeout: 3000,
        })
        return true
      } else {
        Notify.create({
          type: 'info',
          message: t('addToken.cancelled'),
          position: 'top',
          timeout: 3000,
        })
        return false
      }
    } catch (error) {
      console.error('[useAddToken] Ошибка при добавлении токена:', error)
      console.error('[useAddToken] Stack trace:', error.stack)

      // Обрабатываем специфические ошибки
      let errorMessage = t('addToken.error')

      if (error.code === 4001 || error.message?.includes('User rejected')) {
        // Пользователь отклонил запрос
        errorMessage = t('addToken.rejected')
      } else if (error.code === -32603 || error.message?.includes('Internal JSON-RPC error')) {
        // Внутренняя ошибка JSON-RPC
        errorMessage = t('addToken.rpcError')
      } else if (error.message) {
        // Другие ошибки с сообщением
        errorMessage = `${t('addToken.error')}: ${error.message}`
      }

      Notify.create({
        type: 'negative',
        message: errorMessage,
        position: 'top',
        timeout: 5000,
      })

      return false
    }
  }

  return {
    addTokenToWallet,
  }
}
