import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({  TASKS });
// console.log({ CATEGORIES});

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All");


  function handleDelete(deletedTask) {
    const updatedTasks = tasks.filter(task => task.text !== deletedTask)
    setTasks(updatedTasks)
  }


  // const visibleTasks = category==="All" ?  tasks: tasks.filter(task => task.category === category)
  const visibleTasks = tasks.filter(task => category === "All" || task.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setCategory={setCategory} />
      <NewTaskForm tasks={tasks} setTasks={setTasks} categories={CATEGORIES} />
      <TaskList tasks={visibleTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
