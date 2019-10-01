import React from 'react';

function ToDoList(props) {
  console.log(props);
  //props.toDoArray = list of tasks
  return (
    <div>
      {
        props.tasklist.map((info) => (
          <div 
            key={info.id}
            onClick={props.onClick}
            value={props.tasklist.task}>
            {info.task}</div>
        ))
      }
    </div>
  )
}

export default ToDoList;