import React from 'react';
import s from './Task.module.css';

const Task = ({text, priority, complited}) => {
  return (
    <div className={`${s.task}${s[`${priority}Priority`]}`}>
      <p>{text}</p>
      <div>
        <button type="button">Delite</button>
        <select value={priority} name="priority">
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>

        <label>
          Complited
          <input type="checkbox" checked={complited} />
        </label>
      </div>
    </div>
  )
};

export default Task;
