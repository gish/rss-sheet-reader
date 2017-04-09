export const ADD_FILTERED_SOURCE = 'ADD_FILTERED_SOURCE';
export const REMOVE_FILTERED_SOURCE = 'REMOVE_FILTERED_SOURCE';

export const addFilteredSource = (source) => ({
  type: ADD_FILTERED_SOURCE,
  data: source,
});

export const removeFilteredSource = (source) => ({
  type: REMOVE_FILTERED_SOURCE,
  data: source,
});
