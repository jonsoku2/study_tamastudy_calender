import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import post from './post';

export default combineReducers({
  post,
  pender: penderReducer,
});
