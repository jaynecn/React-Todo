import React from 'react';

function TodoForm(props) {
  return (
    <div>
      <form onSubmit={props.addFunction}>
        <input value={props.task}
          onChange=
          {props.changeHandler}
          type="text"
        />
        <button className="add-task" onClick=
        {props.addTask}>Add Task</button>
        <button className="clear-btn">Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;