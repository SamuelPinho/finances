import { SET_OPERATIONS, SEARCH_OPERATION } from 'Redux/Types/operation';

const operationActions = {
  setOperations: operations => {
    return {
      type: SET_OPERATIONS,
      operations
    };
  },
  sarchOperation: text => {
    return {
      type: SEARCH_OPERATION,
      text
    };
  }
};

export default operationActions;
