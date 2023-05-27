import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, toggleTask } from './store/actions';
import "./index.css"

const App = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        const newTask = {
            id: Date.now().toString(),
            title: inputValue,
            completed: false,
        };

        dispatch(addTask(newTask));
        setInputValue('');
    };

    const handleRemove = (id) => {
        dispatch(removeTask(id));
    };

    const handleToggle = (id) => {
        dispatch(toggleTask(id));
    };

    return (
        <div className = "App">
            <h1 className = "App__title">To-Do List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className = "btm" type="submit">Add Task</button>
            </form>
            <ul className = "App__list">
                {tasks.map((task) => (
                    <li className = "App__item" key={task.id}>
            <span className = "App__text"
                  style={{
                      background: task.completed ? '#79a830' : '#f8f8b4',
                  }}
                onClick={() => handleToggle(task.id)}
            >
              {task.title}

            </span>
                        <button className = "btm__delete" onClick={() => handleRemove(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;