import { ADD_TASK, EDIT_TASK, TOOGLE_TASK } from "../constants/action-types";

export const addTask = payload => {
  return { type: ADD_TASK, payload };
};
export const editTask = payload => {
  return { type: EDIT_TASK, payload };
};
export const toogleTask = payload => {
  return { type: TOOGLE_TASK, payload };
};
export const setFilter = filter => ({
  type: "SET_FILTER",
  filter
});
// onTaskToggle, onTaskDelete, onTaskEdit

export const filters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
