import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasks, setTasks] = useState(TASKS)

function onTaskFormSubmit(newTask){
  setTasks([...tasks, newTask])
}

  const handleDelete = (event) => {
    setTasks(tasks.filter(task => task.text !== event.target.name))
  }

  function handleFilter(event){
    const buttons = Array.from(event.target.parentElement.children)
    buttons.forEach(button => button.className="")
    event.target.className = "selected"
    setTasks(TASKS.filter(task => event.target.name === "All"? true : task.category === event.target.name))

  }

  const formCategories = CATEGORIES.filter(category => category !== "All")
  return (
    <div className="App">
      <h2>My tasks</h2>
      
      <CategoryFilter categories={CATEGORIES} handleFilter={handleFilter}/>
      <NewTaskForm categories={formCategories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList 
      tasks={tasks}
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
