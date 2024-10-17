import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const AddTaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      addTask(newTask);
      setTaskText("");
    }
  };

  return (
    <form id="taskForm" onSubmit={handleSubmit}>
      <input
        id="taskInput"
        placeholder="New Task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      {/* <button type="submit">Add</button> */}
      <Button variant="contained">Add Task</Button>
    </form>
  );
};

export default AddTaskForm;
