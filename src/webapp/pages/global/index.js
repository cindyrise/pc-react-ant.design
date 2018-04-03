import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { globalReducer } from './reducer';
import { homeReducer } from '../home/reducer';



const appReducer = {
  global:globalReducer,
  home: homeReducer
};

export default appReducer;
