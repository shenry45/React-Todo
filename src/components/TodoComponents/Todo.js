import React from 'react';

function ToDo(props) {
  return (
    <div className="task">
      <p>{props.todo.task}</p>
    </div>
  )
}

export default ToDo;