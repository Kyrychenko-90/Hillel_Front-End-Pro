import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

const ToDoForm = () => {
    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(userInput));
        setUserInput('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form__input"
                placeholder="Enter a task..."
                value={userInput}
                onChange={handleInputChange}
            />
            <button type="submit" className="form__button">
                Add Task
            </button>
        </form>
    );
};

export default ToDoForm;