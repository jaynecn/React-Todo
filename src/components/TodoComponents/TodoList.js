import React from 'react';

function ToDoList(props) {
  // console.log(props);
  //props.toDoArray = list of tasks
  return (
    <div>
      {
        props.toDoArray.map((info) => (
          <div key={info.task}>{info.task}</div>
        ))
      }
    </div>
  )
}

export default ToDoList;