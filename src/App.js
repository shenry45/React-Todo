import React from 'react';
import ToDoList from './components/TodoComponents/ToDoList.js';

const taskList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      curList: taskList,
      task: "",
      id: undefined,
      completed: ""
    }
  }

  keyHandler = e => { // update field target
    this.setState({ [e.target.name]: e.target.value});
  }

  taskHandler = e => {
    e.preventDefault(); // blocks page reload

    let newTask = { // new task from form submit
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      curList: [...this.state.curList, newTask], // adds new task to array
      task: "",
      id: undefined,
      completed: false
    })
  }

  clearTasksHandler = e => {
    e.preventDefault();

    this.setState({
      curList: []
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <div className="task-list">
          {this.state.curList.map(el => ( // () b/c return in React interprets {} as read code and will break line
            <ToDoList task={el} />
          ))}
        </div>
        <form>
          <input 
            type="text"
            value={this.state.task} // reads state task
            onChange={this.keyHandler} // update state per change
            placeholder="To Do Task"
            name="task" // referenced as origin field
          />
          <br />
          <button onClick={this.taskHandler}>Add Task</button>
          <button onClick={this.clearTasksHandler}>Clear All</button>
        </form>
      </div>
    );
  }
}

export default App;
