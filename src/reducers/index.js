import { combineReducers } from 'redux';
import feedData from './feed-data';
import feedFilter from './feed-filter';
import menu from './menu';

const reducer = combineReducers({
	feedData,
  feedFilter,
  menu,
});

export default reducer;
