import { SET_OPERATIONS } from '../Types/operation';

const INITIAL_STATE = {
  operations: []
};

const applySetOperations = (state, action) => ({
  ...state,
  operations: action.operations
});

function operationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_OPERATIONS: {
      return applySetOperations(state, action);
    }
    default:
      return state;
  }
}

export default operationReducer;
