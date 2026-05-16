import React from 'react';

const TaskFilter = ({filter, setFilter}) => {
  return (
    <div className="filter-buttons">
      <button
        type="button"
        className={
          filter === 'all' ? 'filter-button active-filter' : 'filter-button'
        }
        onClick={() => setFilter('all')}
      >
        All
      </button>

      <button
        type="button"
        className={
          filter === 'active' ? 'filter-button active-filter' : 'filter-button'
        }
        onClick={() => setFilter('active')}
      >
        Active
      </button>

      <button
        type="button"
        className={
          filter === 'completed'
            ? 'filter-button active-filter'
            : 'filter-button'
        }
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;
