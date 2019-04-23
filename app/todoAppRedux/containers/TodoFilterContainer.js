import { connect } from "react-redux";
import TodoFilter from "../components/TodoFilter";
import { filters, clearCompleted, setFilter } from "../actions/index";

const getNumberTasksLeft = tasks => {
  return tasks.filter(task => !task.isCompleted).length;
};

const mapStateToProps = state => ({
  taskLeft: getNumberTasksLeft(state.tasks),
  activeFilter: state.filter,
  filters
});

const mapDispatchToProps = dispatch => ({
  onClearCompleted: () => dispatch(clearCompleted()),
  onFilterSelect: filter => dispatch(setFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFilter);
