import React, { useState, useEffect } from 'react'
import ProgressTracker from './components/ProgressTracker'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  })

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  const clearTasks = () => {
    setTasks([]);
  }

  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h3>NexTask</h3>
      <p><i>Friendly Task Manager</i></p>
      <TaskForm addTask = {addTask}/>

      {/* Search */}
      <input
        className="search-input"
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <TaskList tasks={filteredTasks}
      updateTask={updateTask}
      deleteTask={deleteTask} />
      <ProgressTracker tasks = {tasks}/>

      {tasks.length>0 && (<button className='clear-btn'
      onClick={clearTasks}>clear All Tasks</button>)}
    </div>
  )
}

