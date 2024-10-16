import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
