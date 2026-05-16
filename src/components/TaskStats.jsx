import React from 'react';

const TaskStats = ({ totalTasks, activeTasks, completedTasks }) => {
  return (
    <div className="task-stats">
      <span>Total: {totalTasks}</span>
      <span>Active: {activeTasks}</span>
      <span>Completed: {completedTasks}</span>
    </div>
  );
};

export default TaskStats;
