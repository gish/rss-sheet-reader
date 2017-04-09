import { combineReducers } from 'redux';
import feedData from './feed-data';
import menu from './menu';

const reducer = combineReducers({
	feedData,
  menu,
});

export default reducer;
