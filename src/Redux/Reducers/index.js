import { combineReducers } from 'redux';
import titleReducer from './title';

const rootReducer = combineReducers({
  titleState: titleReducer
});

export default rootReducer;
