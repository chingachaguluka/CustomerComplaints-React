import { combineReducers } from 'redux';
import ComplaintsReducer from './reducer_complaints';

const rootReducer = combineReducers({
  complaints: ComplaintsReducer
});

export default rootReducer;
