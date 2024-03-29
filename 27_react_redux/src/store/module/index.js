import { combineReducers } from 'redux';
import { isDataReducer } from './isDataReducer';
import { counterReducer } from './counter-reducer';
import { accountReducer } from '../../practice/account-reducer';

// 여러 개의 reducer를 하나로 합침
const rootReducer = combineReducers({
  isData: isDataReducer,
  counter: counterReducer,
  bank: accountReducer,
});

export default rootReducer;
