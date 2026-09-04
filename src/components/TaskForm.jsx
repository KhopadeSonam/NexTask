import React, { useState } from 'react'

export default function TaskForm({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('General');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ text: task, Priority: priority, Category: category, date: date, time: time, Completed: false });
        task && setTask('');
        priority && setPriority('Medium');
        category && setCategory('General');
        date && setDate('');
        time && setTime('');
    }
  return (
    <form className="task-form" onSubmit={handleSubmit}>
        <br></br>
        <div id="inp">
        <input type="text" placeholder="Enter a new task" value={task} onChange={(e) => setTask(e.target.value)}/>
        <span><button type="submit">Add Task</button></span>
        </div>

        <div className="datetime-container">
          <div className="datetime-field">
            <label>Due Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
          </div>

          <div className="datetime-field">
            <label>Due Time:</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
        </div>
        
        <div id="btns">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
        </select>
        </div>
    </form>
  )
}
