import React from "react";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div>
      <div id="internalDisplay">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <p>{task.text}</p>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
