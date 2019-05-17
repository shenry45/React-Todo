import React from 'react';

function ToDoForm(props) {
  return (
    <form onSubmit={props.taskHandler}>
      <input 
        type="text"
        value={props.task} // reads state task
        onChange={props.changeHandler} // update state per change
        placeholder="To Do Task"
        name="task" // referenced as origin field
      />
      <br />
      <button onClick={props.taskHandler}>Add Task</button>
      <button onClick={props.clearTasksHandler}>Clear All</button>
      <br />
      <button onClick={props.clearCompletedHandler}>Clear Completed</button>
    </form>
  )
}

export default ToDoForm;