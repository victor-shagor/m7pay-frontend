import { combineReducers } from 'redux';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import settings from './settings/reducer';


const reducers = combineReducers({
  menu,
  authUser,
  settings
});

export default reducers;