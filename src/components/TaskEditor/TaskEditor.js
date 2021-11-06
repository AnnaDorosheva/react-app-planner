import React, { Component } from 'react';
import PrioritySelector from '../PrioritySelector/PrioritySelector';

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
          <PrioritySelector value={priority} onChange={this.handleChange}/>

        </label>
        <button type="submit" onSubmit={this.handleSubmit}>Create</button>
      </form>

    )
  }
};
