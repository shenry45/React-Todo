import React from 'react';
import ToDo from './Todo';

function ToDoList(props) {
  return (
    <div className="task-list">
      {props.list.map(el => ( // () b/c return in React interprets {} as read code and will break line
        <ToDo todo={el} />
      ))}
    </div>
  )
}

export default ToDoList;