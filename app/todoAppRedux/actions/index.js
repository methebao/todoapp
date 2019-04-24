import APIClient from "../../services/APIClient";
import {
  FETCH_TASKS,
  ADD_TASK,
  EDIT_TASK,
  TOOGLE_TASK,
  DELETE_TASK,
  CLEAR_COMPLETED,
  SET_FILTER,
  CHANGE_PAGE,
  TOOGLE_TASK_FAILURE
} from "../constants/action-types";
APIClient.createResource({ name: "todos" });

export const fetchAllTasks = () => {
  return dispatch => {
    APIClient.endpoints.todos
      .getAll()
      .then(({ data }) => dispatch({ type: FETCH_TASKS, payload: data }));
  };
};
export const addTask = payload => {
  return dispatch => {
    APIClient.endpoints.todos.create(payload).then(({ data }) => {
      if (data) {
        return dispatch({ type: ADD_TASK, payload: data });
      }
    });
  };
};
export const editTask = payload => {
  return dispatch => {
    APIClient.endpoints.todos.update(payload).then(({ data }) => {
      if (data) {
        return dispatch({ type: EDIT_TASK, payload });
      }
    });
  };
};
export const deleteTask = id => {
  return dispatch => {
    APIClient.endpoints.todos.delete({ id }).then(({ data }) => {
      if (data) {
        return dispatch({ type: DELETE_TASK, id });
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
          return dispatch({ type: TOOGLE_TASK, task });
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
    tasks.forEach(task => {
      if (task.isCompleted) {
        return dispatch(deleteTask(task.id));
      }
    });
  };
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
