import React from 'react';

function ToDoList(props) {
  return (
    <div key={props.task.id}>
      <p>{props.task.task}</p>
      <p>{props.task.completed}</p>
    </div>
  )
}

export default ToDoList;