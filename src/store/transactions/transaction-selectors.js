const getTransactions = state => state.transactions.result;
const getStatistics = state => state.transactions.result;

const transactionsSelectors = {
  getTransactions,
  getStatistics,
};

export default transactionsSelectors;
