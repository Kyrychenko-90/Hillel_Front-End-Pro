export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task
    };
};

export const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK',
        payload: id
    };
};

export const toggleTask = (id) => {
    return {
        type: 'TOGGLE_TASK',
        payload: id
    };
};

export const addTaskWithAPI = (task) => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://mockapi.io/api/v1/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if (response.ok) {
                const data = await response.json();
                dispatch(addTask(data));
            } else {
                console.error('Failed to add task to API');
            }
        } catch (error) {
            console.error('API request failed', error);
        }
    };
};