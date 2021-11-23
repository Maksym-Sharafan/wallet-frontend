import { createAction } from '@reduxjs/toolkit';

const signupUsersRequest = createAction('auth/signupUsersRequest');
const signupUsersSuccess = createAction('auth/signupUsersSuccess');
const signupUsersError = createAction('auth/signupUsersError');

const loginUsersRequest = createAction('auth/loginUsersRequest');
const loginUsersSuccess = createAction('auth/loginUsersSuccess');
const loginUsersError = createAction('auth/loginUsersError');

const logoutUsersRequest = createAction('auth/logoutUsersRequest');
const logoutUsersSuccess = createAction('auth/logoutUsersSuccess');
const logoutUsersError = createAction('auth/logoutUsersError');

const fetchCurrentUserRequest = createAction('auth/fetchCurrentUserRequest');
const fetchCurrentUserSuccess = createAction('auth/fetchCurrentUserSuccess');
const fetchCurrentUserError = createAction('auth/fetchCurrentUserError');

export const authActions = {
  signupUsersRequest,
  signupUsersSuccess,
  signupUsersError,
  loginUsersRequest,
  loginUsersSuccess,
  loginUsersError,
  logoutUsersRequest,
  logoutUsersSuccess,
  logoutUsersError,
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
};
