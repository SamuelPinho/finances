import { combineReducers } from 'redux';
import pageTitleReducer from './pageTitleReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  pageTitleState: pageTitleReducer,
  sessionState: sessionReducer
});

export default rootReducer;
