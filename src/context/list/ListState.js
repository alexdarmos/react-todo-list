import React, { useReducer } from 'react';
import listContext from './listContext';
import listReducer from './listReducer';
import { GET_TODOS, ADD_TODO } from '../types';

const ListState = props => {
	const initialState = {
		todos: [
			{
				id: 1,
				task: 'clean bedroom',
				completed: true
			},
			{
				id: 2,
				task: 'Empty the dishwasher',
				completed: true
			},
			{
				id: 3,
				task: 'Walk the dog',
				completed: false
			}
		]
	};

	const [state, dispatch] = useReducer(listReducer, initialState);

	//Get Todos
	const getTodos = async () => {
		dispatch({
			type: GET_TODOS,
			payload: initialState.todos
		});
	};

	//Add Todo
	const addTodo = todo => {
		dispatch({
			type: ADD_TODO,
			payload: todo
		});
	};

	//Update ToDo
	//Delete Todo

	return (
		<listContext.Provider
			value={{
				todos: state.todos,
				getTodos,
				addTodo
			}}
		>
			{props.children}
		</listContext.Provider>
	);
};

export default ListState;
