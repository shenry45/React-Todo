import React from 'react';
import ToDo from './Todo';

function ToDoList(props) {
  return (
    <div className="task-list">
      {props.list.map(el => ( // () b/c return in React interprets {} as read code and will break line while () returns
        <ToDo todo={el} key={el.id} /> // key used for error bug
      ))}
    </div>
  )
}

export default ToDoList;