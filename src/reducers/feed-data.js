import { GET_FEED_DATA_SUCCESS } from './../actions/feed-data';

const reducer = (state = {}, action) => {
  const { data, type } = action;

  switch (type) {
    case GET_FEED_DATA_SUCCESS:
      return data;
    default:
      return state;
  };
};

export default reducer;
