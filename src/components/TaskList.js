import React from "react";
import Task from "./Task";

function tasks({ tasks, handleDelete }) {

  const task = tasks.map((task) => {
    return <Task key={Math.random()} {...task} handleDelete={handleDelete} />
  })



  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default tasks;
