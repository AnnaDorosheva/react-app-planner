import React from 'react';
import s from './Task.module.css';
import PrioritySelector from '../../PrioritySelector/PrioritySelector';

const Task = (props) => {
  return (
    <div className={`${s.task} ${s[`${props.priority}Priority`]}`}>
      <p>{props.text}</p>
      <div className={s.panel}>
        <button type="button" onClick={props.onDelete}>Delite</button>
        <PrioritySelector value={props.priority} onChange={(e) => props.updatePriority(props.id, e.target.value)} />

        <label>
          Complited
          <input type="checkbox" onChange={props.togleComplited} checked={props.complited} />
        </label>
      </div>
    </div>
  )
};

export default Task;
