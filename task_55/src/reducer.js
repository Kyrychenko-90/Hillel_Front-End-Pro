const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case 'REMOVE_TASK':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
                )
            };
        default:
            return state;
    }
};

export default reducer;