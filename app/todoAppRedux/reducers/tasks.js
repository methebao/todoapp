import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  TOOGLE_TASK,
  CLEAR_COMPLETED
} from "../constants/action-types";

const tasks = (
  state = [
    {
      id: 1,
      content: "safsd",
      isCompleted: false
    },
    {
      id: 2,
      content: "safsd",
      isCompleted: false
    },
    {
      id: 3,
      content: "safsd",
      isCompleted: false
    }
  ],
  action
) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case EDIT_TASK:
      return state.map(task => {
        let newTask = action.payload;
        if (task.id === newTask.id) {
          task = newTask;
        }
        return task;
      });
    case TOOGLE_TASK:
      return state.map(task =>
        task.id === action.id
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      );
    case DELETE_TASK:
      return state.filter(task => task.id !== action.id);
    case CLEAR_COMPLETED:
      return state.filter(task => !task.isCompleted);
    default:
      return state;
  }
};

export default tasks;
