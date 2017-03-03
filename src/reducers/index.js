import { combineReducers } from 'redux';
import MathReducer from './MathReducer';

const rootReducer = combineReducers({
  math: MathReducer
});

export default rootReducer;
