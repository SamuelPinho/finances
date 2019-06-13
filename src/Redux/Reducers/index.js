import { combineReducers } from 'redux';
import titleReducer from './title';
import sessionReducer from './session';

const rootReducer = combineReducers({
  titleState: titleReducer,
  sessionState: sessionReducer
});

export default rootReducer;
