import React from 'react';

const ToDo = ({ todo, toggleTask, removeTask }) => {
    const handleToggle = () => {
        toggleTask(todo.id);
    };

    const handleRemove = () => {
        removeTask(todo.id);
    };

    return (
        <div className={`todo ${todo.complete ? 'complete' : ''}`}>
            <div className="todo__task" onClick={handleToggle}>
                {todo.task}
            </div>
            <button className="todo__button" onClick={handleRemove}>
                Remove
            </button>
        </div>
    );
};

export default ToDo;