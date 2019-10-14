import {
	GET_TODOS,
	ADD_TODO,
	DELETE_TODO,
	COMPLETE_TODO,
	EDIT_TODO,
	SET_CURRENT,
	CLEAR_CURRENT
} from '../types';

export default (state, action) => {
	switch (action.type) {
		//returns current state of todos
		case GET_TODOS:
			return {
				...state,
				todos: action.payload
			};

		//appends todo to the array of todos
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload]
			};

		case EDIT_TODO:
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.payload.id ? action.payload : todo
				)
			};

		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};

		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			};

		//if todo's id doesn't match payload, return a new array with those unmatched id's
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload)
			};

		//if id of todo matches payload, change completed to opposite of current state and return new array with updated status
		case COMPLETE_TODO:
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.payload
						? { ...todo, completed: !todo.completed }
						: todo
				)
			};

		default:
			return state;
	}
};
