const TaskItem = ({ task, handleToggleTask, handleDeleteTask }) => {
  return (
    <li
      className={`task-item ${task.isComplete ? 'task-item-complete' : ''}`}
      key={task.id}
    >
      <span>{task.title}</span>

      <div className="task-actions">
        <button
          className="toggle-button"
          type="button"
          onClick={() => handleToggleTask(task.id)}
        >
          {task.isComplete ? 'Undo' : 'Complete'}
        </button>

        <button
          className="delete-button"
          type="button"
          onClick={() => handleDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
