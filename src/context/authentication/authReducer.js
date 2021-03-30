// types
import {
  AUTH_REGISTRY_OK,
  AUTH_REGISTRY_ERROR,
  // AUTH_GET_USER,
  // AUTH_LOGIN_OK,
  // AUTH_LOGIN_ERROR,
  // AUTH_CLOSE_SESSION,
} from '../../types';

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_REGISTRY_OK:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null,
      };
    case AUTH_REGISTRY_ERROR:
      return {
        ...state,
        token: null,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
