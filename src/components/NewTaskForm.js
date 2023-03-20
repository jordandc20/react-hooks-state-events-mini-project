import React, { useState } from "react";

function NewTaskForm({ categories, tasks, setTasks }) {
  const category = categories.map((category) => category === "All" ? null : <option key={Math.random()}>{category}</option>)

  const [formData, setFormData] = useState({ text: "", category: "Code" })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTasks([...tasks, formData])
    setFormData({ text: "", category: "Code" })

  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {category}        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
