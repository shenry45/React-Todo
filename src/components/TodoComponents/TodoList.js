import React from 'react';
import ToDo from './Todo';

function ToDoList(props) {
  return (
    <div className="task-list">
      {props.list.map(el => ( // () b/c return in React interprets {} as read code and will break line while () returns
        <ToDo  // key used for error bug
          todo={el}
          id={el.id}
          completedHandler={props.completedHandler}
        />
      ))}
    </div>
  )
}

export default ToDoList;