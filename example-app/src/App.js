import React from 'react'
import Header from "./Components/Header.js"
import Tasks from './Components/Tasks.js';
import { useState } from 'react';
import Addform from './Components/Addform.js';
function App() {
  const [tasks,setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ]);
  const deleteTask=(id)=>{
    setTasks(tasks.filter(t=>t.id!=id));
  }
  const toggleReminder=(id)=>{
    setTasks(tasks.map(t=>{if(t.id===id){if(t.reminder)return {...t,reminder:false};else return {...t,reminder:true};} else return t; }));
  }
  const onClickButton=()=>{
    setAddform(!addForm);
  }
  const [addForm,setAddform]=useState(false);
  return (
    <div className="container">
      <Header onClickButton={onClickButton} addForm={addForm}/>
      {addForm && <Addform setTasks ={setTasks} />}
      {tasks.length==0 ? <div>No Tasks right now</div> :<Tasks  tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/> }

    </div>
  )
}

export default App
