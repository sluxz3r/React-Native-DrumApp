import {combineReducers} from 'redux';
import user from './user';
import data from './data';
import drum from './drum';

const appReducer = combineReducers({
  user,
  data,
  drum
});

export default appReducer;