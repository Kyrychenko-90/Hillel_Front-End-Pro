import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';
import { addTaskWithAPI, removeTask, toggleTask } from './actions';

function App() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleAddTask = (userInput) => {
        if (userInput) {
            const newTask = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            };
            dispatch(addTaskWithAPI(newTask));
        }
    };

    const handleRemoveTask = (id) => {
        dispatch(removeTask(id));
    };

    const handleToggleTask = (id) => {
        dispatch(toggleTask(id));
    };

    return (
        <div className="App">
            <header className="header">
                <h1 className="header__title">Task list:</h1>
            </header>
            <ToDoForm addTask={handleAddTask} />
            {todos.map((todo) => (
                <ToDo
                    key={todo.id}
                    todo={todo}
                    toggleTask={handleToggleTask}
                    removeTask={handleRemoveTask}
                />
            ))}
        </div>
    );
}

export default App;