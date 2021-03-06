import React from 'react';
import ToDoList from './components/TodoComponents/ToDoList';
import ToDoForm from './components/TodoComponents/TodoForm';
import './css/index.css';

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

  clearCompletedHandler = e => {
    e.preventDefault(); // stop page refresh bc button

    this.setState({
      curList: this.state.curList.filter(task => !task.completed)
    })
  }

  completedHandler = taskId => {    
    this.setState({
      curList: this.state.curList.map(task => { // maps through curList for item clicked based on id
        if (taskId === task.id) { // check if click id matches task id from curList
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Tasky</h2>
        <p>Get your to-do list items all in one place.</p>
        <ToDoList list={this.state.curList} completedHandler={this.completedHandler}/>
        <ToDoForm
          task={this.state.task}
          changeHandler={this.keyHandler}
          taskHandler={this.taskHandler}
          clearTasksHandler={this.clearTasksHandler}
          clearCompletedHandler={this.clearCompletedHandler}
        />
      </div>
    );
  }
}

export default App;
