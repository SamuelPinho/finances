import {
  SET_OPERATIONS,
  SEARCH_OPERATION,
  EDIT_OPERATION
} from '../Types/operation';

const INITIAL_STATE = {
  operations: [],
  filteredOperations: []
};

const applySetOperations = (state, action) => ({
  ...state,
  operations: action.operations,
  filteredOperations: action.operations
});

const applySearchOperation = (state, action) => {
  return {
    ...state,
    filteredOperations: Object.keys(state.operations)
      .filter(key => {
        return (
          state.operations[key].description
            .toLowerCase()
            .includes(action.text.toLowerCase()) ||
          state.operations[key].type
            .toLowerCase()
            .includes(action.text.toLowerCase())
        );
      })
      // eslint-disable-next-line
      .reduce((res, key) => ((res[key] = state.operations[key]), res), [])
  };
};

const applyEditOperation = (state, action) => {
  const updatedOperations = state.operations.map(operation => {
    if (action.operation.uid === operation.uid) {
      operation = { ...operation, ...action.operation };
    }
    return operation;
  });

  const updatedFilteredOperations = state.filteredOperations.map(operation => {
    if (action.operation.uid === operation.uid) {
      operation = { ...operation, ...action.operation };
    }
    return operation;
  });

  return {
    ...state,
    operations: updatedOperations,
    filteredOperations: updatedFilteredOperations
  };
};

function operationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_OPERATIONS: {
      return applySetOperations(state, action);
    }
    case SEARCH_OPERATION: {
      return applySearchOperation(state, action);
    }
    case EDIT_OPERATION: {
      return applyEditOperation(state, action);
    }
    default:
      return state;
  }
}

export default operationReducer;
