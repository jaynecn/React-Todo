import React from 'react';

function ToDoForm(props) {
  return (
    <div>
      test ToDoForm
      <form onSubmit={props.addTask}>
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

export default ToDoForm;