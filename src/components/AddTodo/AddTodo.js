import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    value: ""
  };

  changeValueHandler = value => {
    this.setState({ value });
  };

  render() {
    const { onAddTodo } = this.props;
    const { value } = this.state;

    return (
      <form
        className="form-inline"
        onSubmit={e => {
          e.preventDefault();
          if (!value) {
            return;
          }
          onAddTodo(this.state.value);
          this.setState({ value: "" });
        }}
      >
        <div className="form-group mb-2 mr-2">
          <input
            className="form-control"
            value={value}
            onChange={e => this.changeValueHandler(e.target.value)}
          />
        </div>
        
        <button className="btn btn-primary mb-2" type="submit">
          Add TODO
        </button>
      </form>
    );
  }
}

export default AddTodo;
