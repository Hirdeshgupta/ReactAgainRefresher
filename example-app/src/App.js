import React from 'react'
import Header from "./Components/Header.js"
import Tasks from './Components/Tasks.js';
import { useState,useEffect } from 'react';
import Addform from './Components/Addform.js';
function App() {
  const fetchData = async ()=>{
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  }
  useEffect(()=>{
    const getTask = async()=>{
      const data = await fetchData();
      setTasks(data);
    }
    getTask();
  },[])
  const [tasks,setTasks] = useState([]);
  const deleteTask=async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"DELETE"
    })
    setTasks(tasks.filter(t=>t.id!=id));
  }
  const toggleReminder=async(id)=>{
    const updtTask=tasks.map(t=>{if(t.id===id){if(t.reminder)return {...t,reminder:false};else return {...t,reminder:true};} else return t; });
    setTasks(updtTask);
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:"UPDATE",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(updtTask)
    })

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
