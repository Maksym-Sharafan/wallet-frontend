import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { authActions } from "./auth-actions";

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isAuth: false,
};

const user = createReducer(initialState.user, {
  [authActions.signupUsersSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(initialState.token, {
  [authActions.signupUsersSuccess]: (_, { payload }) =>
    console.log(payload.token),
});

const error = createReducer(initialState.error, {
  [authActions.signupUsersRequest]: () => null,
  [authActions.signupUsersSuccess]: () => null,
  [authActions.signupUsersError]: (_, { payload }) => payload,
});

const isAuth = createReducer(initialState.isAuth, {
  [authActions.signupUsersRequest]: () => false,
  [authActions.signupUsersSuccess]: () => true,
});

export default combineReducers({
  user,
  token,
  error,
  isAuth,
});
