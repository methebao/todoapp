import { connect } from "react-redux";
import { toogleTask, deleteTask, editTask } from "../actions";
import TodoList from "../../todoApp/TodoList";
import { filters } from "../actions";
import { TASKS_PER_PAGE } from "../constants";

const getFilteredTasks = (tasks, filter) => {
  switch (filter) {
    case filters.SHOW_ALL:
      return tasks;
    case filters.SHOW_COMPLETED:
      return tasks.filter(task => task.isCompleted);
    case filters.SHOW_ACTIVE:
      return tasks.filter(task => !task.isCompleted);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};
const getCurrentPageTasks = (page, tasks, filter) => {
  let filteredTasks = getFilteredTasks(tasks, filter);
  let startPageIndex = page * TASKS_PER_PAGE - TASKS_PER_PAGE;
  let pageTask = [];
  for (let i = startPageIndex; i < startPageIndex + TASKS_PER_PAGE; i++) {
    if (filteredTasks[i]) {
      pageTask.push(filteredTasks[i]);
    }
  }
  return pageTask;
};

const mapStateToProps = ({ page, tasks, filter }) => ({
  tasks: getCurrentPageTasks(page, tasks, filter)
});

const mapDispatchToProps = dispatch => ({
  onTaskToggle: id => dispatch(toogleTask(id)),
  onTaskDelete: id => dispatch(deleteTask(id)),
  onTaskEdit: newTask => dispatch(editTask(newTask))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
