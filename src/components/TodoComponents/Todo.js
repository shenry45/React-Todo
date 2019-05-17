import React from 'react';

import './Todo.css';

function ToDo(props) {
  return (
    <div
      className={`task ${props.todo.completed === true ? 'complete' : ''}`}
      onClick={() => props.completedHandler(props.id)}
      key={props.id}
    >
      <p>{props.todo.task}</p> {/* renders current el task*/}
    </div>
  )
}

export default ToDo;