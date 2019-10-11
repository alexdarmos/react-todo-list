import { GET_TODOS, ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_TODOS:
			return {
				...state,
				todos: action.payload
			};

		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload]
			};

		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload)
			};

		case COMPLETE_TODO:
			return {
				// ...state,
				// todos: state.todos.map(todo => {
				// 	if (todo.id === action.payload.id) {
				// 		action.payload.completed = true;
				// 	}
				// })
			};

		default:
			return state;
	}
};
