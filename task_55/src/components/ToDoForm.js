import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

const ToDoForm = () => {
    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userInput) {
            dispatch(addTask({
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            }));
            setUserInput('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter a new task"
            />
            <button className="btm" type="submit">Save</button>
        </form>
    );
};

export default ToDoForm;