import { combineReducers } from "redux";
import tasks from "./tasks";
import filter from "./filter";
import page from "./page";
export default combineReducers({
  tasks,
  filter,
  page
});
