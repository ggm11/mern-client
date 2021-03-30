// types
import { ALERT_SHOW_ALERT, ALERT_HIDE_ALERT } from '../../types';

const alertReducer = (state, action) => {
  switch (action.type) {
    case ALERT_SHOW_ALERT:
      return {
        alert: action.payload,
      };
    case ALERT_HIDE_ALERT:
      return {
        alert: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
