import React from "react";
import { Button } from "@mui/material";

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
        <Button
          variant="contained"
          id="deleteBtn"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
