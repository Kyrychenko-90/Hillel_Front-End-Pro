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

export const removeTask = (id) => {
    return (dispatch) => {
        axios
            .delete(`https://64722a276a9370d5a41b1c2a.mockapi.io/todolist/${id}`)
            .then((response) => {
                console.log('The task has been successfully removed:', id);
                dispatch({
                    type: REMOVE_TASK,
                    payload: id,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const toggleTask = (id) => {
    return (dispatch) => {
        axios
            .put(`https://64722a276a9370d5a41b1c2a.mockapi.io/todolist/${id}`)
            .then((response) => {
                console.log('The task has been successfully toggled:', id);
                dispatch({
                    type: TOGGLE_TASK,
                    payload: id,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};