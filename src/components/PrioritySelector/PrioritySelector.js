import React
 from "react";
const PrioritySelector = ({value, onChange}) => {
 return (
    <select value={value} name="priority" onChange={onChange}>
    <option value="low">Low</option>
    <option value="normal">Normal</option>
    <option value="high">High</option>
  </select>
  )
};

export default PrioritySelector;
