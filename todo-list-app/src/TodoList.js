import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          </li>
        ))}
      </ul>
      <TaskForm addTask={addTask} />
    </div>
  );
};

export default TodoList;
