import React from 'react';
import s from './Task.module.css';

const Task = (props) => {
  return (
    <div className={`${s.task} ${s[`${props.priority}Priority`]}`}>
      <p>{props.text}</p>
      <div>
        <button type="button" onClick={props.onDelete}>Delite</button>
        <select value={props.priority} name="priority" onChange={(e) => props.updatePriority(props.id, e.target.value)}>
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>

        <label>
          Complited
          <input type="checkbox" onChange={props.togleComplited} checked={props.complited} />
        </label>
      </div>
    </div>
  )
};

export default Task;
