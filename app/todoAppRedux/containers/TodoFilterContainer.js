import { connect } from "react-redux";
import TodoFilter from "../components/TodoFilter";
import { filters, clearCompleted, setFilter } from "../actions/index";

const getNumberTasksLeft = tasks => {
  return tasks.filter(task => !task.isCompleted).length;
};

const mapStateToProps = state => ({
  tasks: state.todos.tasks,
  taskLeft: getNumberTasksLeft(state.todos.tasks),
  activeFilter: state.filter,
  filters
});

const mapDispatchToProps = dispatch => ({
  onClearCompleted: tasks => dispatch(clearCompleted(tasks)),
  onFilterSelect: filter => dispatch(setFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFilter);
