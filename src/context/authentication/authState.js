// vendors
import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
// types
import {
  AUTH_REGISTRY_OK,
  AUTH_REGISTRY_ERROR,
  AUTH_GET_USER,
  // AUTH_LOGIN_OK,
  AUTH_LOGIN_ERROR,
  // AUTH_CLOSE_SESSION,
} from '../../types';
// clients
import axiosClient from '../../config/axios';
import authToken from '../../config/authToken';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const registryUser = async (data) => {
    try {
      const response = await axiosClient.post('/api/users', data);
      dispatch({
        type: AUTH_REGISTRY_OK,
        payload: response.data,
      });
      userAuthenticated();
    } catch (error) {
      const alert = { msg: error.response.data.msg, category: 'error-alert' };
      dispatch({
        type: AUTH_REGISTRY_ERROR,
        payload: alert,
      });
    }
  };

  const userAuthenticated = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      authToken(token);
    }

    try {
      const response = await axiosClient.get('/api/auth');
      dispatch({
        type: AUTH_GET_USER,
        payload: response.data.user,
      });
    } catch (error) {
      dispatch({
        type: AUTH_LOGIN_ERROR,
      });
    }
  };

  const { token, authenticated, user, message } = state;

  return (
    <authContext.Provider
      value={{
        token,
        authenticated,
        user,
        message,
        registryUser,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
