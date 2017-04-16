import moment from 'moment';
import { GET_FEED_DATA_SUCCESS, GET_FEED_DATA_REQUEST } from './../actions/feed-data';

const parseDate = date => moment(date, 'MMMM DD, YYYY at HH:mmA').toDate();

const reducer = (state = {}, action) => {
  const { data, type } = action;

  switch (type) {
    case GET_FEED_DATA_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
    case GET_FEED_DATA_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        feeds: data.map(items => ({
            title: items[0].Feed,
            items: items.map(item => ({
              date: parseDate(item.Date),
              title: item.Title,
              url: item.Url,
              content: item.Content,
              feed: item.Feed,
              feedUrl: item.FeedUrl,
            })),
        })),
      };
    default:
      return state;
  };
};

export default reducer;
