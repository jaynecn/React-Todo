import React from 'react';
import './Todo.css';

function TodoList(props) {
  // console.log(props);
  return (
    <div>
      {
        props.taskList.map((info) => {
          // console.log(info);
          return (
          <div className="list-of-tasks"
            key={info.id}
            >{info.task}
            <button className="clicked-button"
              value={info.task}
              onClick={props.markCompleted}
              >x</button>
          </div>)
        })
      }
    </div>
  )
}

export default TodoList;