const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getUserEmail = (state) => state.auth.user.email;
const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;
const getRegistered = state => state.auth.register;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getUserEmail,
  getIsFetchingCurrent,
  getRegistered,
};

export default authSelectors;
