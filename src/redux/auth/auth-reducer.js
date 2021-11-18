import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from './auth-actions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isAuth: false,
};

const user = createReducer(initialState.user, {
  [authActions.signupUsersSuccess]: (_, { payload }) => payload.user,
  [authActions.loginUsersSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutUsersSuccess]: () => user.name,
});

const token = createReducer(initialState.token, {
  [authActions.signupUsersSuccess]: (_, { payload }) => payload.token,
  [authActions.loginUsersSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutUsersRequest]: () => null,
});

const error = createReducer(initialState.error, {
  [authActions.signupUsersRequest]: () => null,
  [authActions.signupUsersSuccess]: () => null,
  [authActions.signupUsersError]: (_, { payload }) => payload,
});

const isAuth = createReducer(initialState.isAuth, {
  [authActions.signupUsersRequest]: () => false,
  [authActions.signupUsersSuccess]: () => true,
  [authActions.loginUsersRequest]: () => false,
  [authActions.loginUsersSuccess]: () => true,
  [authActions.logoutUsersSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuth,
});
