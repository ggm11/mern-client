// vendors
import React, { useReducer } from 'react';

// context
import alertContext from './alertContext';

// reducer
import alertReducer from './alertReducer';

// types
import { ALERT_SHOW_ALERT, ALERT_HIDE_ALERT } from '../../types';

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const showAlert = (msg, category) => {
    dispatch({
      type: ALERT_SHOW_ALERT,
      payload: { msg, category },
    });
    setTimeout(() => {
      dispatch({ type: ALERT_HIDE_ALERT });
    }, 5000);
  };

  const { alert } = state;

  return (
    <alertContext.Provider
      value={{
        alert,
        showAlert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
