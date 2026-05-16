import TaskItem from './TaskItem';

const TaskList = ({ filteredTasks, handleToggleTask, handleDeleteTask }) => {
  if (filteredTasks.length === 0) {
    return <p className="empty-message">No tasks match this filter.</p>;
  }

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            handleToggleTask={handleToggleTask}
            handleDeleteTask={handleDeleteTask}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
