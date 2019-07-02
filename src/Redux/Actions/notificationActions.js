import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION
} from 'Redux/Types/notification';

const notificationActions = {
  addNotification: notification => {
    return {
      type: ADD_NOTIFICATION,
      notification
    };
  },
  removeNotification: index => {
    return {
      type: REMOVE_NOTIFICATION,
      index
    };
  }
};

export default notificationActions;
