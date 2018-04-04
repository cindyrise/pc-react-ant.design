import { globalReducer } from './reducer';
import { homeReducer } from '../home/reducer';
import { loginReducer } from '../login/reducer';

const appReducer = {
  global:globalReducer,
  home: homeReducer,
  	login:loginReducer,};


export default appReducer;
