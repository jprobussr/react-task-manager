import TaskItem from './TaskItem';

const TaskList = ({
  tasks,
  handleToggleTask,
  handleDeleteTask,
  handleUpdateTask,
}) => {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks match this filter.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            handleToggleTask={handleToggleTask}
            handleDeleteTask={handleDeleteTask}
            handleUpdateTask={handleUpdateTask}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
