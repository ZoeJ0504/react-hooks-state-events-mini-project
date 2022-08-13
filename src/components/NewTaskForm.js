import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [formDetails, setFormDetails]= useState("")
  const [categoryForm, setCategoryForm] =useState("Code")

  function handleDetailChange(event){
  setFormDetails(() => event.target.value)
}

function handleCategoryChange(event){
  setCategoryForm(() => event.target.value)
}
function handleSubmit(event){
event.preventDefault()
  const newTask={
  text: formDetails,
  category: categoryForm
}
onTaskFormSubmit(newTask)
setFormDetails("")
setCategoryForm("Code")
}
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailChange} value={formDetails}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={categoryForm}>
          {categories.map(category => <option  key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
