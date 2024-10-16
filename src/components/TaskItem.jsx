import React from "react";
import { Task } from "../taskType";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <p>{task.text}</p>
      </div>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
