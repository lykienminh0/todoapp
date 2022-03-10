import React from "react";
import './TaskFilters.css';

const TaskFilters = (props) => {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      onClick={() => props.setFilter(props.name)}
    >
      <span>{props.displayName}</span>
    </button>
  );
};

export default TaskFilters;
