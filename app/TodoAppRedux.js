import React from "react";
import { Provider } from "react-redux";
import store from "./todoAppRedux/store/index";
import { connect } from "react-redux";
import VisibleTodoList from "./todoAppRedux/containers/VisibleTodoList";
import TodoFormContainer from "./todoAppRedux/containers/TodoFormContainer";
import LoadingSpinnerContainer from "./todoAppRedux/containers/LoadingSpinnerContainer";
import Paper from "./todoAppRedux/containers/Paper";
import TodoFilterContainer from "./todoAppRedux/containers/TodoFilterContainer";
import MessageBox from "./todoAppRedux/components/MessageBox";
import { fetchAllTasks } from "./todoAppRedux/actions";

class TodoAppRedux extends React.Component {
  componentDidMount() {
    this.props.fetchAllTasks();
  }

  render() {
    return (
      <main>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <div style={{ display: "inline-block" }}>
                <h1 className="title">TodoApp</h1>
                <h2 className="subtitle">Using React + Redux</h2>
              </div>
              <div style={{ float: "right" }}>
                <MessageBox />
              </div>
            </div>
          </div>
        </section>
        <section className="section add-todo">
          <div className="container">
            <div className="media">
              <div className="media-left">
                <LoadingSpinnerContainer />
              </div>

              <div className="media-content">
                <TodoFormContainer />
              </div>
            </div>
          </div>
        </section>
        <section className="section todo-list">
          <div className="container">
            <div className="box">
              <VisibleTodoList />
            </div>
            <Paper />
          </div>
        </section>

        <section className=" section todo-filter">
          <div className="container">
            <TodoFilterContainer />
          </div>
        </section>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllTasks: () => dispatch(fetchAllTasks())
});

const ConnectedTodoAppRedux = connect(
  null,
  mapDispatchToProps
)(TodoAppRedux);

const TodoAppReduxBase = () => {
  return (
    <Provider store={store}>
      <ConnectedTodoAppRedux />
    </Provider>
  );
};
export default TodoAppReduxBase;
