import React, { Component } from 'react'
import shortid from 'shortid';
import TaskEditor from "../TaskEditor/TaskEditor";
import TaskFilter from '../TaskFilter/TaskFilter';
import TaskList from '../TaskList/TaskList';

const filterTasks = (value, tasksArr) => {
return tasksArr.filter(task => task.text.toLowerCase().includes(value.toLowerCase()))
}

export default class App extends Component {
  state = {
    tasks: [],
    filter: ""
  };

  componentDidMount() {
const fromLocalstorage = localStorage.getItem('tasks');
if(fromLocalstorage) {
 const tasks = JSON.parse(fromLocalstorage);
 this.setState({tasks: tasks});
}
  };

  componentDidUpdate(prevProps, prevState) {
if(prevState.tasks !== this.state.tasks) {
  localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
}
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
};
togleComplited = (id) => {
  this.setState( state => ({
    tasks: state.tasks.map(task => task.id === id ? {...task, complited: !task.complited} : task)
  }))
};
updatePriority = (id, priority) => {
this.setState( state => ({
  tasks: state.tasks.map(task => task.id === id ? {...task, priority} : task)
}))
};
changeFilter = (e) => {
  this.setState({filter: e.target.value})
};

  render() {
    const { tasks, filter } = this.state;
    const filteredTasks = filterTasks(filter, tasks);
    return (
      <div>
   <TaskEditor onAddTask={this.addTask}/>
   <TaskFilter  value={filter} onChangeFilter={this.changeFilter}/>
   <TaskList items={tasks.length >=1 ? filteredTasks : tasks} onDelete={this.deleteTask} updatePriority={this.updatePriority} togleComplited={this.togleComplited}/>
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