import React from 'react'

const TaskFilter = ({value, onChangeFilter}) => {
  return (
    <input name="" type="text" placeholder="Type to filter..." value={value} onChange={onChangeFilter}>
      
    </input>
  )
}

export default TaskFilter

