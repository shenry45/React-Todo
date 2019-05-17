import React from 'react';

function ToDo(props) {
  return (
    <div
      className={`task ${props.todo.completed === true ? 'completed' : ''}`}
      onClick={() => props.completedHandler(props.id)}
      key={props.id}
    >
      <p>{props.todo.task}</p> {/* renders current el task*/}
    </div>
  )
}

export default ToDo;