import { createAction } from "@reduxjs/toolkit";

const signupUsersRequest = createAction("auth/signupUsersRequest");
const signupUsersSuccess = createAction("auth/signupUsersSuccess");
const signupUsersError = createAction("auth/signupUsersError");

export const authActions = {
  signupUsersRequest,
  signupUsersSuccess,
  signupUsersError,
};
