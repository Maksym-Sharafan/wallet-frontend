const isLoggedIn = (state) => state.auth.token;
const getUserName = (state) => state.auth.user.name;
const getError = (state) => state.auth.error;
const isAuth = (state) => state.auth.isAuth;

export const authSelectors = {
  isLoggedIn,
  getUserName,
  getError,
  isAuth,
};
