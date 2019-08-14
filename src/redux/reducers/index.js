import {combineReducers} from 'redux';
import user from './user';
import data from './data';
import drum from './drum';
import userid from './userid';
import pola from './pola';

const appReducer = combineReducers({
  user,
  data,
  drum,
  userid,
  pola
});

export default appReducer;