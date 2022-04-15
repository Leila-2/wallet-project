const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.currentUser.name;
const getUserAvatar = (state) => state.auth.currentUser.avatarURL;
const getUserEmail = (state) => state.auth.user.email;
const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

const authSelectors = {
	getIsLoggedIn,
	getUserName,
	getUserAvatar,
	getUserEmail,
	getIsFetchingCurrent,
};

export default authSelectors;