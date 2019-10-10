import React, { useState, useContext, useEffect } from 'react';
import ListContext from '../../context/list/listContext';

const TodoForm = () => {
	const listContext = useContext(ListContext);

	const { addTodo } = listContext;

	const [todo, setTodo] = useState({
		task: ''
	});

	const { task } = todo;

	//set value of input
	const onChange = e => {
		setTodo({ ...todo, [e.target.name]: e.target.value });
	};

	//Add todo to list
	const onSubmit = e => {
		e.preventDefault();
		console.log(todo);
		addTodo(todo);
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="todo..."
				name="task"
				value={task}
				onChange={onChange}
			/>

			<input type="submit" value="Add" />
		</form>
	);
};

export default TodoForm;
