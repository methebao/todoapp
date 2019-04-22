import { connect } from "react-redux";
// import { toggleTodo } from "../actions";
// import TodoList from "../components/TodoList";
import { filters } from "../actions";

const getVisibleTasks = (tasks, filter) => {
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

const mapStateToProps = state => ({
  tasks: getVisibleTasks(state.todos, state.filters)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);
