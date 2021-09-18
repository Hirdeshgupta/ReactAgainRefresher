import React from 'react';
import { useState } from 'react';

const Addform = ({setTasks,isaddform,tasks}) => {
    const [state,setState]=useState({
        text:"",
        day:"",
        reminder:false
    })
    const handleChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const handleChangeCheck=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.checked
        })
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        if(state.text==""){alert('Please enter the task');return;}
        if(state.day=="") {alert('Please enter the day');return;}
        // await fetch()
        const taskupdt ={
            id:Math.floor(Math.random()*1000+1),
            ...state
        }
        if(state.text!="" && state.day!=""){
        setTasks(prev=>(
            [
                ...prev,
                taskupdt
            ]
        ))
        }
        await fetch("http://localhost:5000/tasks",{
            method:"POST",
            headers:
            {
                'Content-type':'application/json'
            },
            body:JSON.stringify(taskupdt)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="add-form">
                <div className="form-control">
                    <label>Add Task</label>
                    <input name="text" onChange={handleChange} placeholder="Add Task" type="text" />
                </div>
                <div className="form-control">
                    <label>Add Day and Time</label>
                    <input name="day" onChange={handleChange}  placeholder="Add Day and Time" type="text" />
                </div>
                <div className="form-control form-control-check">
                    <label>Reminder</label>
                    <input name="reminder" onChange={handleChangeCheck} type="checkbox" />
                </div>
                <input  type="Submit" className="btn btn-block" />
            </form>
        </div>
    )
}


export default Addform
