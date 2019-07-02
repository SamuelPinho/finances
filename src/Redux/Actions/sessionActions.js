import { SET_AUTH_USER } from 'Redux/Types/session';

const sessionActions = {
  setAuthUser: authUser => {
    return {
      type: SET_AUTH_USER,
      authUser
    };
  }
};

export default sessionActions;
