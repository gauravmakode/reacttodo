import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  renderTodo = () => {
    const list = this.props.todo_list;
    return list.map((item) => <h2>{item}</h2>);
  };

  render() {
    return (
      <div>
        <h1>Your Todosss</h1>
        {this.renderTodo()}
      </div>
    );
  }
}

const get = (state) => {
  return {
    todo_list: state.todo,
  };
};
export default connect(get)(Home);
