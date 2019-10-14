import React, { useState, useContext, useEffect } from 'react';
import ListContext from '../../context/list/listContext';

const TodoForm = () => {
	const listContext = useContext(ListContext);

	const { addTodo, editTodo, clearCurrent, current } = listContext;

	const [todo, setTodo] = useState({
		task: ''
	});

	const { task } = todo;

	//side-effect: checks if current object is set, if current exists, set input value to current
	useEffect(() => {
		if (current !== null) {
			setTodo(current);
		} else {
			setTodo({
				task: ''
			});
		}
	}, [current]);

	//set value of input
	const onChange = e => {
		setTodo({ ...todo, [e.target.name]: e.target.value });
	};

	//Add todo to list
	const onSubmit = e => {
		e.preventDefault();

		//check if current exts, if it does not, if it doesn't, use the addTodo function, if it does exist, edit was selected, so use editTodo function
		if (current === null) {
			addTodo(todo);
			setTodo({
				task: ''
			});
		} else {
			editTodo(todo);
		}

		clearCurrent();
	};

	return (
		<form className="todo-form" onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="todo..."
				name="task"
				value={task}
				onChange={onChange}
			/>

			<input type="submit" value={current !== null ? 'Update' : 'Add'} />
		</form>
	);
};

export default TodoForm;
