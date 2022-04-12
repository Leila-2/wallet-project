const getTransactions = state => state.transactions.result.data.transactions;
const getStatistics = state => state;
const getBalance = state => state.transactions.result.data.totalBalance;

const transactionsSelectors = {
  getTransactions,
  getStatistics,
  getBalance,
};

export default transactionsSelectors;
