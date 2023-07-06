import React, { useState } from 'react'
import classes from './ShowTasks.module.css';
const ShowTasks = (props) => {
  return (
    <div className={classes.tasks}>
      {props.Tasks.map((item , id)=>{
        let {task,date,done} = item;
        return (
          <div className={classes.Task}>
              <p>{task}</p>
              <span>{!date ?'No specific Date' :`deadline : ${date}`}</span>
              <button
                onClick={() => {
                  props.DoneTask(id)
                }}
              >
                {done ? (
                  <p className={classes.Done}>Done</p>
                ) : (
                  <p className={classes.NotDone}>Not Done</p>
                )}
              </button>
          </div>
        )
      })}
    </div>
  )
}

export default ShowTasks