import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ListContext from '../../context/list/listContext';

const TodoItem = ({ todo }) => {
	const { task, completed, id } = todo;

	const listContext = useContext(ListContext);
	const { deleteTodo, completeTodo, setCurrent } = listContext;

	//delete todo
	const onDelete = () => {
		deleteTodo(id);
	};

	//complete todo
	const onComplete = () => {
		completeTodo(id);
	};

	return (
		<div>
			<ul>
				<li>{task}</li>
				<li>{completed === true ? '[X]' : '[]'}</li>
				<li>
					<button onClick={onDelete}>Remove</button>
				</li>
				<li>
					<input
						type="checkbox"
						checked={completed === true ? 'checked' : ''}
						onChange={onComplete}
					/>
				</li>
				<li>
					{/* setCurrent is called from state, 
					passes the selected todo object */}
					<button onClick={() => setCurrent(todo)}>Edit</button>
				</li>
			</ul>
		</div>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

export default TodoItem;
