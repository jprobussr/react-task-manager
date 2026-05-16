import { useState } from 'react';

const TaskItem = ({
  task,
  handleToggleTask,
  handleDeleteTask,
  handleUpdateTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(task.title);

  return (
    <li
      className={`task-item ${task.isComplete ? 'task-item-complete' : ''}`}
      key={task.id}
    >
      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={editInput}
          onChange={(e) => {
            setEditInput(e.target.value);
          }}
        />
      ) : (
        <span>{task.title}</span>
      )}

      <div className="task-actions">
        {isEditing ? (
          <button
            className="edit-button"
            type="button"
            onClick={() => {
              if (editInput.trim() === '') {
                return;
              }

              handleUpdateTask(task.id, editInput);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="edit-button"
            type="button"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        )}

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
