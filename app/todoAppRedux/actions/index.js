import APIClient from "../../services/APIClient";
import {
  FETCH_TASKS,
  ADD_TASK,
  EDIT_TASK,
  TOOGLE_TASK,
  TOOGLE_TASK_FAILURE,
  DELETE_TASK,
  CLEAR_COMPLETED,
  CLOSE_MESSAGE,
  SET_FILTER,
  CHANGE_PAGE,
  TOGGLE_LOADING
} from "../constants/action-types";
APIClient.createResource({ name: "todos" });

export const fetchAllTasks = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_LOADING });
    APIClient.endpoints.todos.getAll().then(({ data }) => {
      dispatch({ type: FETCH_TASKS, payload: data });
      dispatch({ type: TOGGLE_LOADING });
    });
  };
};
export const addTask = payload => {
  return dispatch => {
    dispatch({ type: TOGGLE_LOADING });
    APIClient.endpoints.todos.create(payload).then(({ data }) => {
      if (data) {
        dispatch({ type: ADD_TASK, payload: data });
        dispatch({ type: TOGGLE_LOADING });
      }
    });
  };
};
export const editTask = payload => {
  return dispatch => {
    dispatch({ type: TOGGLE_LOADING });

    APIClient.endpoints.todos.update(payload).then(({ data }) => {
      if (data) {
        dispatch({ type: EDIT_TASK, payload });
        dispatch({ type: TOGGLE_LOADING });
      }
    });
  };
};
export const deleteTask = id => {
  return dispatch => {
    dispatch({ type: TOGGLE_LOADING });
    APIClient.endpoints.todos.delete({ id }).then(({ data }) => {
      if (data) {
        dispatch({ type: DELETE_TASK, id });
        dispatch({ type: TOGGLE_LOADING });
      }
    });
  };
};
export const toogleTask = task => {
  return dispatch => {
    dispatch({ type: TOOGLE_TASK, task });
    let newTaskToggled = task;
    newTaskToggled.isCompleted = !newTaskToggled.isCompleted;

    APIClient.endpoints.todos
      .update(newTaskToggled)
      .then(({ data }) => {
        if (data) {
          return dispatch({ type: TOOGLE_TASK, data });
        }
      })
      .catch(error => {
        console.log(error);
        return dispatch({ type: TOOGLE_TASK_FAILURE, task });
      });
  };
};
export const clearCompleted = tasks => {
  return dispatch => {
    dispatch({ type: TOGGLE_LOADING });
    tasks.forEach(task => {
      if (task.isCompleted) {
        dispatch(deleteTask(task.id));
      }
    });
    dispatch({ type: TOGGLE_LOADING });
  };
};
export const closeMessage = () => {
  return { type: CLOSE_MESSAGE };
};

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

export const changePage = page => ({
  type: CHANGE_PAGE,
  page
});
// onTaskToggle, onTaskDelete, onTaskEdit

export const filters = {
  SHOW_ALL: "all",
  SHOW_COMPLETED: "completed",
  SHOW_ACTIVE: "active"
};
