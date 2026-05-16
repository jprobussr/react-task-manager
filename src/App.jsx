import './App.css';
import { useState, useEffect } from 'react';
import TaskItem from './components/TaskItem.jsx';
import TaskForm from './components/TaskForm.jsx';
import TaskFilter from './components/TaskFilter.jsx';

const App = () => {
  const [filter, setFilter] = useState('all');
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
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
    ];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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

  const handleTaskInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (taskInput.trim() === '') {
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      title: taskInput,
      isComplete: false,
    };

    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });

    setTaskInput('');
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return task.isComplete === false;
    }

    if (filter === 'completed') {
      return task.isComplete === true;
    }

    return true;
  });

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => {
    return task.isComplete;
  }).length;

  const activeTasks = totalTasks - completedTasks;

  return (
    <main className="app">
      <section className="task-manager">
        <p className="eyebrow">React Practice Project</p>
        <h1>Task Manager</h1>
        <p className="intro">
          Add, complete, delete, and filter tasks while practicing React state.
        </p>

        <TaskForm
          taskInput={taskInput}
          handleTaskInputChange={handleTaskInputChange}
          handleAddTask={handleAddTask}
        />

        <TaskFilter
          filter={filter}
          setFilter={setFilter}
        />

        <div className="task-stats">
          <span>Total: {totalTasks}</span>
          <span>Active: {activeTasks}</span>
          <span>Completed: {completedTasks}</span>
        </div>

        {filteredTasks.length > 0 ? (
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
        ) : (
          <p className="empty-message">No tasks match this filter.</p>
        )}
      </section>
    </main>
  );
};

export default App;
