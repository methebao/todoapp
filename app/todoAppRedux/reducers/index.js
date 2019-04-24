import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
import page from "./page";
import spinner from "./spinner";

export default combineReducers({
  todos,
  filter,
  page,
  spinner
});
