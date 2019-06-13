const INITIAL_STATE = {
  title: ''
};

const applySetTitle = (state, action) => ({
  ...state,
  title: action.title
});

function titleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_TITLE': {
      return applySetTitle(state, action);
    }
    default:
      return state;
  }
}

export default titleReducer;
