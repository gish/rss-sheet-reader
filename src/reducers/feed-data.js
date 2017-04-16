import { GET_FEED_DATA_SUCCESS, GET_FEED_DATA_REQUEST } from './../actions/feed-data';

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
        feeds: data.map((items) => ({
            title: items[0].Feed,
            items: items,
          })
        ),
      };
    default:
      return state;
  };
};

export default reducer;
