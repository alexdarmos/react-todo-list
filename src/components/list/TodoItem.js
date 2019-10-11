import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ListContext from '../../context/list/listContext';

const TodoItem = ({ todo: { task, completed, id } }) => {
	const listContext = useContext(ListContext);
	const { deleteTodo } = listContext;

	// const { task, completed } = todo;

	//delete todo
	const onDelete = () => {
		deleteTodo(id);
	};

	//complete todo
	const onComplete = () => {};

	//update todo

	return (
		<div>
			<ul>
				<li>{task}</li>
				<li>{completed === true ? '[X]' : '[]'}</li>
				<button onClick={onDelete}>Remove</button>
			</ul>
		</div>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

export default TodoItem;
