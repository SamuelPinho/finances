import {
  SET_OPERATIONS,
  SEARCH_OPERATION,
  EDIT_OPERATION
} from 'Redux/Types/operation';

const operationActions = {
  setOperations: operations => {
    return {
      type: SET_OPERATIONS,
      operations
    };
  },
  searchOperation: text => {
    return {
      type: SEARCH_OPERATION,
      text
    };
  },
  editOperation: operation => {
    return {
      type: EDIT_OPERATION,
      operation
    };
  }
};

export default operationActions;
