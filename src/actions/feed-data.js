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

const getFeedDataRequest = (key) => ({
  type: GET_FEED_DATA_REQUEST,
  data: key,
});

const getFeedDataSuccess = (data) => ({
  type: GET_FEED_DATA_SUCCESS,
  data,
});

export const getFeedData = key => dispatch => {
  dispatch(getFeedDataRequest(key));

  return fetchData(key)
    .then(data => dispatch(getFeedDataSuccess(data)));
}
