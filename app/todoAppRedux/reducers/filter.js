import { filters } from "../actions";
import { SET_FILTER } from "../constants/action-types";
const visibilityFilter = (state = filters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
