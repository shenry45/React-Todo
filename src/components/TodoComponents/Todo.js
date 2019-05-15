import React from 'react';

function ToDo(props) {
  return (
    <div className="task">
      <p>{props.todo.task}</p> {/* renders current el task*/}
    </div>
  )
}

export default ToDo;