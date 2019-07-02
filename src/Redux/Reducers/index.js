import { combineReducers } from 'redux';
import pageTitleReducer from './pageTitleReducer';
import sessionReducer from './sessionReducer';
import notificationReducer from './notificationReducer';
import operationReducer from './operationReducer';

const rootReducer = combineReducers({
  pageTitleState: pageTitleReducer,
  sessionState: sessionReducer,
  notificationState: notificationReducer,
  operationState: operationReducer
});

export default rootReducer;
