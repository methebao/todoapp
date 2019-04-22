import { filters } from "../actions";

const visibilityFilter = (state = filters.SHOW_ALL, action) => {
  if (action.type === filters) {
    return action.filter;
  } else {
    return state;
  }
};

export default visibilityFilter;
