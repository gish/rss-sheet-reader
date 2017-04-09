import { ADD_FILTERED_SOURCE, REMOVE_FILTERED_SOURCE } from '../actions/feed-filter';

const reducer = (state = {}, action) => {
  const type = action.type;
  const source = action.data;
  const filteredSources = state.filteredSources || [];

  switch (type) {
    case ADD_FILTERED_SOURCE:
      return {
        ...state,
        filteredSources: [...filteredSources, source],
      };
    case REMOVE_FILTERED_SOURCE:
      const pos = filteredSources.indexOf(source);
      return {
        ...state,
        filteredSources: [
          ...filteredSources.slice(0, pos),
          ...filteredSources.slice(pos + 1),
        ],
      };
    default:
      return state;
  };
};

export default reducer;
