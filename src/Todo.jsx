import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return; 
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"/>

      <button onClick={addTask}>Add Task</button>

      <ol>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}{" "}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;