import { ADD_TASK, EDIT_TASK, TOOGLE_TASK } from "../constants/action-types";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case EDIT_TASK:
      break;
    case TOOGLE_TASK:
      return state.map(task =>
        task.id === action.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
    default:
      return state;
  }
};

export default todos;
