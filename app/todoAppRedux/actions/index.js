import {
  ADD_TASK,
  EDIT_TASK,
  TOOGLE_TASK,
  DELETE_TASK,
  CLEAR_COMPLETED,
  SET_FILTER,
  CHANGE_PAGE
} from "../constants/action-types";

export const addTask = payload => {
  return { type: ADD_TASK, payload };
};
export const editTask = payload => {
  return { type: EDIT_TASK, payload };
};
export const deleteTask = id => {
  return { type: DELETE_TASK, id };
};
export const toogleTask = id => {
  return { type: TOOGLE_TASK, id };
};

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});
export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
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
