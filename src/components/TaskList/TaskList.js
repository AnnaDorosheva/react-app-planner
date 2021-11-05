import React from 'react';
import Task from "./Task/Task";

const TaskList = ({ items, onDelete, togleComplited, updatePriority }) => {
  return (
items.length > 0 && (
  <ul>
    {items.map(item => <li key={item.id}><Task {...item} updatePriority={updatePriority} togleComplited={() => togleComplited(item.id)} onDelete={() => onDelete(item.id)} /></li>)}
  </ul>
)
  )
}

export default TaskList

