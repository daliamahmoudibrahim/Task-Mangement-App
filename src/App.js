import { useEffect, useState } from 'react';
import AddTask from './Components/AddTask';
import ShowTasks from './Components/ShowTasks';
import classes from './App.module.css';
import img from './imgs/img.jpg'
function App() {
    let [Tasks , SetTasks] = useState([]);
    let [done , SetDone] = useState(false);
    let [completeTasks , setCompleteTasks] = useState(0);
    
    const getTask=(task)=>
    {
      SetTasks((prevTasks)=>
      {
        return [task , ...prevTasks];
      })
    }
    const DoneTask = (taskId)=>
    {
      Tasks[taskId].done = true;
      SetDone(!done);
    }


   
 
  return (
    <div className={classes.App}>
      <div className={classes.AppContent}>
        <p >Total Tasks : {Tasks.length}</p>
        <AddTask onGetTask={getTask} />
        <ShowTasks Tasks={Tasks} DoneTask={DoneTask} done={done}/>
      </div>
      <img src={img} className={classes.mainImg} />
    </div>
  )
}

export default App;
