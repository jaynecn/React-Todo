import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';
import { isUnaryExpression } from '@babel/types';


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
      taskList: toDoArray,
      task: '',
      changing: [],
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
      taskList:
      this.state.taskList.concat(newTask),
      task: '',
    });
  }

  removeTodo = (info) => {
      
    // setToDos((todos) => todos.filter((info) => info.id !== id))
  }

  markCompleted = (info) => {
    info.preventDefault();
    const clickedId = info.target.value;
    console.log(clickedId);

    let jayne = clickedId.toString();
    // console.log(jayne);

    const clickedItem = this.state.taskList.filter((info) => info.task === jayne);
    // console.log(clickedItem);

    clickedItem.forEach((info) => {
      info.completed = true;
    })
    console.log(clickedItem);

    this.setState({
      changing: this.state.changing.concat(clickedItem),
    });


  }




  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList 
          taskList={this.state.taskList}
          task={this.state.task}
          markCompleted={this.markCompleted}
        />
        <ToDoForm 
        addFunction={this.addTask}
        addTask={this.addTask}
        task={this.state.task}
        changeHandler={this.changeHandler}
        removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default App;