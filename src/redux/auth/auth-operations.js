// import { set } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
import axios from 'axios';
import { authActions } from './auth-actions';

axios.defaults.baseURL = 'https://wallet-29.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signup = credentials => async dispatch => {
  dispatch(authActions.signupUsersRequest());
  try {
    const res = await axios.post('/auth/signup', credentials);
    if(res.data.status === "success") {
      const {data} = await axios.post('/auth/login', credentials);
      token.set(data.data.token);
      dispatch(authActions.signupUsersSuccess(data.data));
    }
  } catch (error) {
    dispatch(authActions.signupUsersError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(authActions.loginUsersRequest());
  try {
    const { data } = await axios.post('/auth/login', credentials);

    token.set(data.data.token);
    dispatch(authActions.loginUsersSuccess(data.data));
  } catch (error) {
    dispatch(authActions.loginUsersError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(authActions.logoutUsersRequest());
  try {
    const { data } = await axios.get('/auth/logout');
    token.unset();
    dispatch(authActions.logoutUsersSuccess(data));
  } catch (error) {
    dispatch(authActions.logoutUsersError(error.message));
  }
};

export const authOperations = {
  signup,
  login,
  logout,
};
