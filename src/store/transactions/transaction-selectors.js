const getTransactions = state => state.transactions.result.data.transactions;
const getStatistics = state => state.transactions.result.statistics;
const getBalance = state => state.transactions.result.data.totalBalance;
const getChartBalance = state => state.transactions.result.statistics.expenses;
const getChartBalanceIncomes = state =>
  state.transactions.result.statistics.incomes;
const getChartStatistics = state =>
  state.transactions.result.statistics.transactions;
const getTransactionId = state =>
  state.transactions.result.data.transactions.id;

const transactionsSelectors = {
  getTransactions,
  getStatistics,
  getBalance,
  getChartBalance,
  getChartStatistics,
  getChartBalanceIncomes,
  getTransactionId,
};

export default transactionsSelectors;
