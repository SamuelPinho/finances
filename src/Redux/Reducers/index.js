import { combineReducers } from 'redux';
import pageTitleReducer from './pageTitleReducer';
import sessionReducer from './sessionReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  pageTitleState: pageTitleReducer,
  sessionState: sessionReducer,
  notificationState: notificationReducer
});

export default rootReducer;
