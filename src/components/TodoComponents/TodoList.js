import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

function TodoList(props) {

  // console.log(props);
  return (
    <div>
      {
        props.taskList.map((info) => {
          // console.log(info);
          return (
          <div key={info.id}>
             {
            info.completed === true 
              ? <div className="checked-tasks" key=     {info.id}>
                  <div className="checked-div">
                    {/* <input type="checkbox"/> */}
                    {info.task}           
                  </div>
                  <button className="clicked-button"
                    value={info.task}
                    onClick={props.markCompleted}
                    >X
                  </button>
               </div>

              : <div className="list-of-tasks" key=     {info.id}>
                  <div className="mini-div">
                    {/* <input type="checkbox"/> */}
                    {info.task}           
                  </div>
                  <button className="clicked-button"
                    value={info.task}
                    onClick={props.markCompleted}
                    >X
                  </button>
                </div>
            }
          </div>);
        })
      }
    </div>
  )
}

export default TodoList;