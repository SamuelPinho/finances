import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../Types/notification';

const INITIAL_STATE = {
  notifications: []
};

// {
//   message: 'mensagem de sucesso'
//   type: 'success'
// }

const applyAddNotification = (state, action) => ({
  ...state,
  notifications: [...state.notifications, action.notification]
});

const applyRemoveNotification = (state, action) => {
  state.notifications.splice(action.index, 1);

  return {
    ...state,
    notifications: [...state.notifications]
  };
};

function notificationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_NOTIFICATION: {
      return applyAddNotification(state, action);
    }
    case REMOVE_NOTIFICATION: {
      return applyRemoveNotification(state, action);
    }
    default:
      return state;
  }
}

export default notificationReducer;
