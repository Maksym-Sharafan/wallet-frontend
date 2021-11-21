import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from './auth-actions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isAuth: false,
  isFetchingCurrentUser: false,
};

const user = createReducer(initialState.user, {
  [authActions.signupUsersSuccess]: (_, { payload }) => payload.user,
  [authActions.loginUsersSuccess]: (_, { payload }) => payload.user,
  // [authActions.logoutUsersSuccess]: () => user.name,
  [authActions.logoutUsersSuccess]: () => initialState.user,
  [authActions.fetchCurrentUserSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(initialState.token, {
  [authActions.signupUsersSuccess]: (_, { payload }) => payload.token,
  [authActions.loginUsersSuccess]: (_, { payload }) => payload.token,
  // [authActions.logoutUsersSuccess]: () => null,
  [authActions.logoutUsersSuccess]: () => initialState.token,
});

const error = createReducer(initialState.error, {
  [authActions.signupUsersRequest]: () => null,
  [authActions.signupUsersSuccess]: () => null,
  [authActions.signupUsersError]: (_, { payload }) => payload,

  [authActions.loginUsersRequest]: () => null,
  [authActions.loginUsersSuccess]: () => null,
  [authActions.loginUsersError]: (_, { payload }) => payload,

  [authActions.logoutUsersRequest]: () => null,
  [authActions.logoutUsersSuccess]: () => null,
  [authActions.logoutUsersError]: (_, { payload }) => payload,

  [authActions.fetchCurrentUserRequest]: () => null,
  [authActions.fetchCurrentUserSuccess]: () => null,
  [authActions.fetchCurrentUserError]: (_, { payload }) => payload,
});

const isAuth = createReducer(initialState.isAuth, {
  [authActions.signupUsersRequest]: () => false,
  [authActions.signupUsersSuccess]: () => true,
  // [authActions.loginUsersRequest]: () => false,
  [authActions.loginUsersSuccess]: () => true,
  [authActions.logoutUsersSuccess]: () => false,
  [authActions.fetchCurrentUserSuccess]: () => true,
});

const isFetchingCurrentUser = createReducer(
  initialState.isFetchingCurrentUser,
  {
    [authActions.fetchCurrentUserRequest]: () => true,
    [authActions.fetchCurrentUserSuccess]: () => false,
  },
);

export default combineReducers({
  user,
  token,
  error,
  isAuth,
  isFetchingCurrentUser,
});
