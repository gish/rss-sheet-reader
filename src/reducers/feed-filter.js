import { ADD_FILTERED_SOURCE, REMOVE_FILTERED_SOURCE } from '../actions/feed-filter';

const reducer = (state = {}, action) => {
  const type = action.type;
  const source = action.data;
  let filteredSources = state.filteredSources || [];

  switch (type) {
    case ADD_FILTERED_SOURCE:
      filteredSources = [...filteredSources, source];
      return {
        ...state,
        filteredSources,
      };
    case REMOVE_FILTERED_SOURCE:
      const pos = filteredSources.indexOf(source);
      filteredSources = [
        ...filteredSources.slice(0, pos),
        ...filteredSources.slice(pos + 1),
      ];
      return {
        ...state,
        filteredSources,
      };
    default:
      return state;
  };
};

export default reducer;
