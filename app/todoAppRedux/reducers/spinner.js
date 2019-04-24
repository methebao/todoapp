import { TOGGLE_LOADING } from "../constants/action-types";

const spinner = (
  state = {
    isLoading: false
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return { isLoading: !state.isLoading };
    default:
      return state;
  }
};

export default spinner;
