import {
  FETCH_TASKS,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  TOOGLE_TASK,
  CLOSE_MESSAGE,
  CLEAR_COMPLETED,
  TOOGLE_TASK_FAILURE
} from "../constants/action-types";

const todos = (
  state = { tasks: [], requestResult: { isSuccess: false, message: null } },
  action
) => {
  switch (action.type) {
    case FETCH_TASKS:
      if (action.payload) {
        return {
          tasks: action.payload,
          requestResult: { isSuccess: true, message: null }
        };
      } else {
        return { ...state };
      }

    case ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],
        requestResult: { isSuccess: true, message: "Successfully Added Task !" }
      };
    case EDIT_TASK:
      return {
        tasks: state.tasks.map(task => {
          let newTask = action.payload;
          if (task.id === newTask.id) {
            task = newTask;
          }
          return task;
        }),
        requestResult: {
          isSuccess: true,
          message: "Successfully Edited Task !"
        }
      };
    case TOOGLE_TASK:
      return {
        tasks: state.tasks.map(task =>
          task === action.task
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        ),
        requestResult: { isSuccess: true, message: null }
      };
    case TOOGLE_TASK_FAILURE:
      return {
        tasks: state.tasks.map(task => {
          return task.id === action.task.id
            ? { ...task, isCompleted: !task.isCompleted }
            : task;
        }),
        requestResult: {
          isSuccess: false,
          message: "Toogle Task unsuccessfully! Check your internet again."
        }
      };

    case DELETE_TASK:
      return {
        tasks: state.tasks.filter(task => task.id !== action.id),
        requestResult: {
          isSuccess: true,
          message: "Successfully Deleted Task !"
        }
      };

    case CLEAR_COMPLETED:
      return {
        tasks: state.tasks.filter(task => !task.isCompleted),
        requestResult: {
          isSuccess: true,
          message: "Successfully Clear All Completed Task !"
        }
      };
    case CLOSE_MESSAGE:
      return {
        ...state,
        requestResult: {
          ...state.requestResult,
          message: null
        }
      };
    default:
      return state;
  }
};

export default todos;
