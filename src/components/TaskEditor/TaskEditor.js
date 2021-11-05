import React, { Component } from 'react';

export default class TaskEditor extends Component {
  state = {
    text: '',
    priority: "normal"
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();

this.props.onAddTask({...this.state});
this.setState({
  text: '',
  priority: "normal"
})
  }
  render() {
    const { priority, text} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={text} onChange={this.handleChange} name="text" placeholder="Enter task content..." />
        <label>
          Select task priority
          <select name="priority" onChange={this.handleChange} value={priority}>
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
          </select>
        </label>
        <button type="submit" onSubmit={this.handleSubmit}>Create</button>
      </form>

    )
  }
};
