import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ListContext from '../../context/list/listContext';

const TodoItem = ({ todo: { task, completed } }) => {
	// const listContext = useContext(ListContext);

	// const { task, completed } = todo;

	return (
		<div>
			<ul>
				<li>{task}</li>
				<li>{completed === true ? '[X]' : '[]'}</li>
			</ul>
		</div>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

export default TodoItem;
