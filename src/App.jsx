import './App.css';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Practice React State',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Build a task manager app',
      isComplete: true,
    },
    {
      id: 3,
      title: 'Commit progress to GitHub',
      isComplete: false,
    },
  ]);

  const handleToggleTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isComplete: !task.isComplete,
          };
        }

        return task;
      });
    });
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        return task.id !== id;
      });
    });
  };

  return (
    <main className="app">
      <section className="task-manager">
        <p className="eyebrow">React Practice Project</p>
        <h1>Task Manager</h1>
        <p className="intro">
          Add, complete, delete, and filter tasks while practicing React state.
        </p>

        <ul className="task-list">
          {tasks.map((task) => {
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
          })}
        </ul>
      </section>
    </main>
  );
};

export default App;
