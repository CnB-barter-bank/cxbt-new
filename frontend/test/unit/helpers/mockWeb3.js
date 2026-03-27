/**
 * Mock Web3 Provider
 */
export const createMockProvider = () => {
  return {
    send: vi.fn().mockResolvedValue(['0x1234567890123456789012345678901234567890']),
    getNetwork: vi.fn().mockResolvedValue({ chainId: 8453 }),
    getBalance: vi.fn().mockResolvedValue(BigInt('1000000000000000000')),
    getSigner: vi.fn().mockResolvedValue({
      address: '0x1234567890123456789012345678901234567890',
      signMessage: vi.fn().mockResolvedValue('0xsignature'),
      signTransaction: vi.fn().mockResolvedValue('0xsignedtx'),
      sendTransaction: vi.fn().mockResolvedValue({
        hash: '0x1234567890abcdef',
        wait: vi.fn().mockResolvedValue({
          hash: '0x1234567890abcdef',
          blockNumber: 12345,
          status: 1
        })
      })
    }),
    getBlock: vi.fn().mockResolvedValue({
      number: 12345,
      hash: '0x1234567890abcdef',
      timestamp: 1234567890
    }),
    getBlockNumber: vi.fn().mockResolvedValue(12345),
    estimateGas: vi.fn().mockResolvedValue(BigInt('21000')),
    getGasPrice: vi.fn().mockResolvedValue(BigInt('20000000000')),
    getFeeData: vi.fn().mockResolvedValue({
      gasPrice: BigInt('20000000000'),
      maxFeePerGas: BigInt('30000000000'),
      maxPriorityFeePerGas: BigInt('1000000000')
    }),
    waitForTransaction: vi.fn().mockResolvedValue({
      hash: '0x1234567890abcdef',
      blockNumber: 12345,
      status: 1
    })
  }
}

/**
 * Mock Web3 Signer
 */
export const createMockSigner = (address = '0x1234567890123456789012345678901234567890') => {
  return {
    address,
    signMessage: vi.fn().mockResolvedValue('0xsignature'),
    signTransaction: vi.fn().mockResolvedValue('0xsignedtx'),
    sendTransaction: vi.fn().mockResolvedValue({
      hash: '0x1234567890abcdef',
      wait: vi.fn().mockResolvedValue({
        hash: '0x1234567890abcdef',
        blockNumber: 12345,
        status: 1
      })
    })
  }
}

/**
 * Mock Contract
 */
export const createMockContract = () => {
  return {
    getTokenBalances: vi.fn().mockResolvedValue([
      BigInt('100000000'), // unlocked (100 * 10^6)
      BigInt('50000000'), // locked (50 * 10^6)
      BigInt('150000000') // total (150 * 10^6)
    ]),
    balanceOf: vi.fn().mockResolvedValue(BigInt('10000000000000000000')), // 10 PAID
    decimals: vi.fn().mockResolvedValue(18),
    isWhitelisted: vi.fn().mockResolvedValue(false),
    isBlacklisted: vi.fn().mockResolvedValue(false),
    calculateUnlockCost: vi.fn().mockResolvedValue(BigInt('1000000000000000000')), // 1 PAID
    unlockTokens: vi.fn().mockResolvedValue({
      hash: '0x1234567890abcdef',
      wait: vi.fn().mockResolvedValue({
        hash: '0x1234567890abcdef',
        blockNumber: 12345,
        status: 1
      })
    }),
    transfer: vi.fn().mockResolvedValue({
      hash: '0x1234567890abcdef',
      wait: vi.fn().mockResolvedValue({
        hash: '0x1234567890abcdef',
        blockNumber: 12345,
        status: 1
      })
    }),
    approve: vi.fn().mockResolvedValue({
      hash: '0x1234567890abcdef',
      wait: vi.fn().mockResolvedValue({
        hash: '0x1234567890abcdef',
        blockNumber: 12345,
        status: 1
      })
    }),
    allowance: vi.fn().mockResolvedValue(BigInt('10000000000000000000')) // 10 PAID
  }
}

/**
 * Mock Window Ethereum
 */
export const createMockWindowEthereum = () => {
  return {
    request: vi.fn().mockImplementation(async ({ method, params }) => {
      if (method === 'eth_requestAccounts') {
        return ['0x1234567890123456789012345678901234567890']
      }
      if (method === 'wallet_switchEthereumChain') {
        return null
      }
      if (method === 'wallet_addEthereumChain') {
        return null
      }
      return null
    }),
    on: vi.fn(),
    removeAllListeners: vi.fn(),
    send: vi.fn().mockResolvedValue(['0x1234567890123456789012345678901234567890']),
    isMetaMask: true,
    chainId: '0x2105', // 8453 in hex
    selectedAddress: null
  }
}

/**
 * Setup global Web3 mocks
 */
export const setupWeb3Mocks = () => {
  global.window = global.window || {}
  global.window.ethereum = createMockWindowEthereum()
  global.navigator = {
    ...global.navigator,
    clipboard: {
      writeText: vi.fn().mockResolvedValue(undefined)
    }
  }
}

/**
 * Reset all Web3 mocks
 */
export const resetWeb3Mocks = () => {
  if (global.window.ethereum) {
    global.window.ethereum.request.mockClear()
    global.window.ethereum.on.mockClear()
    global.window.ethereum.removeAllListeners.mockClear()
    global.window.ethereum.send.mockClear()
  }
  if (global.navigator.clipboard) {
    global.navigator.clipboard.writeText.mockClear()
  }
}

/**
 * Mock Ethers library
 */
export const mockEthers = () => {
  const ethers = {
    formatEther: value => (Number(value) / 1e18).toString(),
    parseEther: value => BigInt(Math.floor(parseFloat(value) * 1e18)),
    formatUnits: (value, decimals = 18) => {
      const divisor = BigInt(10 ** decimals)
      const integerPart = value / divisor
      const fractionalPart = value % divisor
      const fractionalStr = fractionalPart.toString().padStart(decimals, '0').slice(0, decimals)
      return `${integerPart}.${fractionalStr}`
    },
    parseUnits: (value, decimals = 18) => {
      const [integer, fractional] = value.split('.')
      const integerPart = BigInt(integer) * BigInt(10 ** decimals)
      const fractionalPart = fractional
        ? BigInt(fractional.padEnd(decimals, '0').slice(0, decimals))
        : BigInt(0)
      return integerPart + fractionalPart
    },
    BrowserProvider: vi.fn().mockImplementation(() => createMockProvider()),
    Contract: vi.fn().mockImplementation(() => createMockContract())
  }

  return ethers
}
