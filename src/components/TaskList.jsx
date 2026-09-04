import React from 'react'

export default function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index)=>{
        const updatedTask = {...tasks[index], completed: !tasks[index].completed};
        updateTask(updatedTask, index);
    }

  return (
    <div>
      <h3>Task List</h3>
      {tasks.map((task, index) => (
        <li key={index}>
          <div>
            <span>{task.text}</span>
            <small>({task.Priority}, {task.Category})</small>
            {(task.date || task.time) && (
              <p className="task-datetime">
                {task.date && <span>📅 {task.date}</span>}
                {task.time && <span>⏰ {task.time}</span>}
              </p>
            )}
          </div>
          
          <div>
            <button onClick={() => toggleComplete(index)}
              > {task.completed ? "Undo" : "Complete"} </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </div>
  )
}
