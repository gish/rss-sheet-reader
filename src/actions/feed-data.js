import Tabletop from 'tabletop';

export const GET_FEED_DATA_REQUEST = 'GET_FEED_DATA_REQUEST';
export const GET_FEED_DATA_SUCCESS = 'GET_FEED_DATA_SUCCESS';

const fetchData = (key) => {
	return new Promise((resolve, reject) => {
		Tabletop.init({
			key,
			simpleSheet: true,
			callback: (data) => resolve(data),
		});
	});
};

const getFeedDataRequest = (keys) => ({
  type: GET_FEED_DATA_REQUEST,
  data: keys,
});

const getFeedDataSuccess = (data) => ({
  type: GET_FEED_DATA_SUCCESS,
  data,
});

export const getFeeds = keys => dispatch => {
  dispatch(getFeedDataRequest(keys));

  return Promise.all(keys.map(fetchData))
    .then(data => dispatch(getFeedDataSuccess(data)))
}
