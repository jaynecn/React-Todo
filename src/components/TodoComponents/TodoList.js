import React from 'react';

function TodoList(props) {
  console.log(props);
  //props.toDoArray = list of tasks
  return (
    <div>
      {
        props.tasklist.map((info) => (
          <div 
            key={info.id}
            onClick={props.onClick}
            value={info.task}>
            {info.task}</div>
        ))
      }
    </div>
  )
}

export default TodoList;