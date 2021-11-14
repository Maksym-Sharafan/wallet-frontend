const getIsLoggedIn = (state) => state.auth.token;
const getUserName = (state) => state.auth.user.name;
const getError = (state) => state.auth.error;
const getIsAuth = (state) => state.auth.isAuth;

export const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getError,
  getIsAuth,
};
