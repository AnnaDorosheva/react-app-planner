import React, { Component } from 'react'
import shortid from 'shortid';
import TaskEditor from "../TaskEditor/TaskEditor";
import TaskFilter from '../TaskFilter/TaskFilter';
import TaskList from '../TaskList/TaskList';

export default class App extends Component {
  state = {
    tasks: [],
  };


addTask = (task) => {
  const taskToAdd = {
    ...task,
    id: shortid.generate(),
    complited: false
  }
  this.setState( state => ({
    tasks: [...state.tasks, taskToAdd]
  }))
};
deleteTask = (id) => {
  this.setState( state => ({
    tasks: state.tasks.filter(task => task.id !== id)
  }))
}
  render() {
    const { tasks } = this.state;
    return (
      <div>
   <TaskEditor onAddTask={this.addTask}/>
   <TaskFilter />
   <TaskList items={tasks} onDelete={this.deleteTask}/>
  </div> )
  }
}
// ===================================================================
// modal window
// openModal = () => this.setState( { isModalOpen: true});
// closeModal = () => this.setState( { isModalOpen: false});

// render() {
  
//   return (
//     <div>
     
//      <button onClick={this.openModal}>Open</button>
//      {this.state.isModalOpen && (       <ModalWindow onClose={this.closeModal}> 
//        <h2>Modal window</h2>
//        <p>Моя цель - донести до вас все необходимое для того, чтобы вы сразу, с довольно хорошим пониманием вопроса, начали пользоваться git. Здесь я не беру цель рассказать все темы, но только те, которые нужны чтобы сразу начать пользоваться Git.
//        </p>
//        <button onClick={this.closeModal}>Close modal</button>
//      </ModalWindow>)}

  
// </div> )
// }