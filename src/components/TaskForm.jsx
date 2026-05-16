import React from 'react';

const TaskForm = ({ taskInput, handleTaskInputChange, handleAddTask }) => {
  return (
    <form className="task-form" onSubmit={handleAddTask}>
      <label htmlFor="task-title">New Task</label>

      <div className="task-form-row">
        <input
          type="text"
          id="task-title"
          value={taskInput}
          onChange={handleTaskInputChange}
          placeholder="Example: Review React Props"
        />

        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
