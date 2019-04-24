import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
import page from "./page";
export default combineReducers({
  todos,
  filter,
  page
});
