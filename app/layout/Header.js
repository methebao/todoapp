import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }
  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };
  render() {
    return (
      <nav
        className="navbar"
        aria-label="main navigation"
        style={{
          borderBottom: "solid 1px #dddddd"
        }}
      >
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/" activeClassName="is-active">
            <span>TheBaoDev</span>
          </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={
            this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              to="todo-app"
              activeClassName="is-active"
            >
              <span
                className="icon has-text-primary"
                style={{ marginRight: 5 }}
              >
                <i className="fas fa-code" />
              </span>
              To do App
            </NavLink>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/methebao">
              <span className="icon">
                <i className="fab fa-lg fa-github" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
