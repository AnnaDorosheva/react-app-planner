import React from 'react';
import Task from "./Task/Task";

const TaskList = ({ items, onDelete }) => {
  return (
items.length > 0 && (
  <ul>
    {items.map(item => <li key={item.id}><Task {...item} onDelete={() => onDelete(item.id)} /></li>)}
  </ul>
)
  )
}

export default TaskList

