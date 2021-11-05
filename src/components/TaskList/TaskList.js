import React from 'react';
import Task from "./Task/Task";

const TaskList = ({ items }) => {
  return (
items.length > 0 && (
  <ul>
    {items.map(item => <li key={item.id}><Task {...item} /></li>)}
  </ul>
)
  )
}

export default TaskList

