import React, { useReducer } from 'react';
import uuid from 'uuid';
import listContext from './listContext';
import listReducer from './listReducer';
import {
	GET_TODOS,
	ADD_TODO,
	DELETE_TODO,
	COMPLETE_TODO,
	EDIT_TODO,
	SET_CURRENT,
	CLEAR_CURRENT
} from '../types';

const ListState = props => {
	const initialState = {
		current: null,
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
	const editTodo = contact => {
		dispatch({
			type: EDIT_TODO,
			payload: contact
		});
	};

	//set current contact in form
	const setCurrent = contact => {
		dispatch({
			type: SET_CURRENT,
			payload: contact
		});
	};

	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

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
		console.log(id);
	};

	return (
		<listContext.Provider
			value={{
				todos: state.todos,
				current: state.current,
				getTodos,
				addTodo,
				deleteTodo,
				completeTodo,
				editTodo,
				setCurrent,
				clearCurrent
			}}
		>
			{props.children}
		</listContext.Provider>
	);
};

export default ListState;
