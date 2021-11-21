const IsLoggedIn = state => state.auth.token;
const getUserName = state => state.auth.user.name;
const getError = state => state.auth.error;
const IsAuth = state => state.auth.isAuth;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const authSelectors = {
  IsLoggedIn,
  getUserName,
  getError,
  IsAuth,
  getIsFetchingCurrent,
};
