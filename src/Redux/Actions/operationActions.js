import { SET_OPERATIONS } from 'Redux/Types/operation';

const operationActions = {
  setOperations: operations => {
    return {
      type: SET_OPERATIONS,
      operations
    };
  }
};

export default operationActions;
