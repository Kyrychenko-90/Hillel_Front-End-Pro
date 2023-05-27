import axios from 'axios';

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (task) => {
    return (dispatch) => {
        axios
            .post('https://64722a276a9370d5a41b1c2a.mockapi.io/todolist', task)
            .then((response) => {
                console.log('The request has been successfully sent to the server:', response.data);
                dispatch({
                    type: ADD_TASK,
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const removeTask = (id) => ({
    type: REMOVE_TASK,
    payload: id,
});

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: id,
});