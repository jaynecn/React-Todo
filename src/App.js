import React from 'react';
import ToDoList from './components/TodoComponents/ToDoList';
import ToDoForm from './components/TodoComponents/ToDoForm';

export const toDoArray = [
  { task: 'Feed the Cat', id: 0, completed: false },
  { task: 'Take out the bins', id: 1, completed: false },
  { task: 'Get some sleep', id: 2, completed: false }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      tasklist: toDoArray,
      task: '',
    };
  }

  changeHandler = (info) => {
    this.setState({
      task: info.target.value
      });
  }
  

  addTask = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now(),
      task: this.state.task,
      completed: false,
    };

    this.setState({
      taskList: this.state.toDoArray.concat(newTask),
      task: '',
    });
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList toDoArray={toDoArray}/>
        <ToDoForm addTask={this.addTask}
        task={this.state.task}
        changeHandler={this.changeHandler}/>
      </div>
    );
  }
}

export default App;