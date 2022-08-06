import { combineReducers } from 'redux';
import { count } from './count.js';
import { theme } from './theme.js';

const rootReducer = combineReducers({
  count,
  theme
});

export default rootReducer;