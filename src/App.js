import React from 'react';
import ToDoList from './components/TodoComponents/ToDoList';
import ToDoForm from './components/TodoComponents/TodoForm';

const taskList = [];

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
        <ToDoList list={this.state.curList} />
        <ToDoForm
          task={this.state.task}
          changeHandler={this.keyHandler}
          taskHandler={this.taskHandler}
          clearTasksHandler={this.clearTasksHandler}
        />
      </div>
    );
  }
}

export default App;
