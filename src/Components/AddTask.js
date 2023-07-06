import React, { useRef, useState } from 'react'
import classes from './AddTask.module.css';
import img  from '../imgs/motivation.jpg';
import { BsFillCalendarCheckFill } from 'react-icons/bs'
const AddTask = (props) => 
{

    let [ShowDate , SetShowDate] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [dateValue, setDateValue] = useState('')
    let taskInput = useRef("")
    let dateInput = useRef("");


    const taskClickHandle = (e) => {
         taskInput.current = e.target.value
         setInputValue(taskInput.current);
    
    }
    const  dateClickHandle = (e) =>{
        dateInput.current= e.target.value
        setDateValue(dateInput.current)
    }
    const AddTaskClick =(e)=>{
       e.preventDefault();
       let Task = {
         task: taskInput.current,
         date: dateInput.current
       }

       if(!inputValue){
        alert("Check your enter your Task");
        return;
       }
       props.onGetTask(Task);

     
        setInputValue("")
        setDateValue("")
        dateInput.current=""
        taskInput.current =""
    }
  return (
    <div className={classes.AddTask}>
      <form onSubmit={AddTaskClick}>
        <div className={classes.inputContainer}>
          <input type="text" onChange={taskClickHandle} value={inputValue} ref={taskInput}/>
          {ShowDate && <input type="date" ref={dateInput}  value={dateValue} onChange={dateClickHandle}/>}
          <BsFillCalendarCheckFill className={classes.Icon} onClick={()=>{SetShowDate(!ShowDate)}}/>
        </div>
        <button type="submit" className={classes.addBtn}>
          AddTask
        </button>

      </form>
    </div>
  )
}

export default AddTask