import React, { useReducer } from 'react';
import uuid from 'uuid';
import listContext from './listContext';
import listReducer from './listReducer';
import { GET_TODOS, ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../types';

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
	const getTodos = () => {
		dispatch({
			type: GET_TODOS,
			payload: initialState.todos
		});
	};

	//Add Todo
	const addTodo = todo => {
		todo.id = uuid.v4();
		todo.completed = false;
		dispatch({
			type: ADD_TODO,
			payload: todo
		});
	};

	//Update ToDo

	//Delete Todo
	const deleteTodo = id => {
		dispatch({
			type: DELETE_TODO,
			payload: id
		});
		console.log(id);
	};

	//complete todo
	const completeTodo = id => {
		dispatch({
			type: COMPLETE_TODO,
			payload: id
		});
	};

	return (
		<listContext.Provider
			value={{
				todos: state.todos,
				getTodos,
				addTodo,
				deleteTodo,
				completeTodo
			}}
		>
			{props.children}
		</listContext.Provider>
	);
};

export default ListState;
