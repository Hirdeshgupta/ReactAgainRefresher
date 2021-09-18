import React from 'react'
import { useState } from 'react';
import Task from './Task';
const Tasks = ({setTasks,tasks,deleteTask,toggleReminder}) => {
  
    return (
        <>
            {tasks.map(task => <Task setTasks={setTasks} deleteTask={deleteTask}  key={task.id} task={task} toggleReminder={toggleReminder} />)}
        </>
    )
}

export default Tasks
