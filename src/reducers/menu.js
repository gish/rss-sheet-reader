import { SHOW_MENU, HIDE_MENU } from '../actions/menu';
const reducer = (state = {}, action) => {
  const type = action.type;

  switch (type) {
    case SHOW_MENU:
      return {
        ...state,
        visible: true,
      };
    case HIDE_MENU:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  };
};

export default reducer;
