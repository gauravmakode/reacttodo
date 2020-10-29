import React, { Component } from "react";
import { connect } from "react-redux";
import { changeTodo } from "./actions/action";
import { Link } from "react-router-dom";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  renderTodo = () => {
    const list = this.props.todo_list;
    return list.map((item) => <h2>{item}</h2>);
  };

  addTodo = () => {
    const newList = [...this.props.todo_list, this.state.newTodo];
    this.props.change_todo(newList);
    this.setState({
      newTodo: "",
    });
  };

  render() {
    return (
      <div>
        <Link to="/home">Home</Link>
        <input
          placeholder="enter todo"
          value={this.state.newTodo}
          onChange={this.handleChange}
        ></input>
        <button autoFocus onClick={() => this.addTodo()}>
          Add todo
        </button>
        {this.renderTodo()}
      </div>
    );
  }
}

const getdata = (state) => {
  return {
    todo_list: state.todo,
  };
};

const postdata = (dispatch) => {
  return {
    change_todo: (todo) => {
      dispatch(changeTodo(todo));
    },
  };
};

export default connect(getdata, postdata)(Todo);
