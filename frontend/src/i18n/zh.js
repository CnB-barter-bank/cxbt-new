export default {
  token: '代币',
  unlockTokens: '解锁CXBT代币',
  unlockAmount: '解锁金额',
  unlockPercentage: '解锁百分比',
  unlockCost: 'PAID代币成本',
  unlockButton: '解锁',
  unlockingButton: '解锁中...',
  unlockSuccess: '代币解锁成功',
  unlockError: '解锁代币时出错',
  insufficientLockedTokens: '锁定代币不足',
  invalidAmount: '无效金额',
  
  selectLanguage: '选择语言',
  
  page: {
    title: 'CXBT平台',
    subtitle: '管理您的{paidToken}和{workToken}代币',
  },
  
  balances: {
    title: '代币余额',
    refresh: '刷新余额',
    errorLoading: '加载余额时出错',
    errorData: '获取数据失败',
    loading: '加载余额中...',
    paidBalance: '余额',
    workBalance: '可用余额',
    lockedTokens: '锁定代币',
  },
  
  unlock: {
    title: '解锁CXBT代币',
    description: '解锁您的锁定代币',
    amountLabel: '要解锁的代币数量',
    amountMustBePositive: '金额必须大于0',
    insufficientLocked: '锁定代币不足',
    percentageLabel: '解锁百分比',
    costLabel: '成本',
    button: '解锁',
  },
  
  transfer: {
    title: '转账CXBT代币',
    description: '将CXBT代币转账到另一个地址',
    success: '代币转账成功!',
    recipientLabel: '收款地址',
    amountLabel: '代币数量',
    button: '转账',
  },
  
  wallet: {
    notConnected: '钱包未连接',
    connectPrompt: '连接您的钱包以查看{paidToken}和{workToken}代币余额',
    connectTooltip: '点击连接钱包',
  },
  
  notify: {
    unlockPercentageError: '获取解锁百分比失败',
    unlockCostError: '计算解锁成本时出错',
    enterUnlockAmount: '请输入要解锁的代币数量',
    insufficientLocked: '锁定代币不足',
    unlockSuccess: '代币解锁成功!',
    transactionCancelled: '交易已取消',
    transactionRejected: '您在钱包中拒绝了交易',
    unlockError: '解锁代币时出错',
    fillAllFields: '请填写所有字段',
    invalidAddress: '地址格式无效',
    transferCancelled: '用户取消了交易',
    transferError: '转账时出错',
  },
  
  tokens: {
    paidToken: 'PAID',
    workToken: 'CXBT',
  },
}
