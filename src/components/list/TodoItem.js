import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ListContext from '../../context/list/listContext';

const TodoItem = ({ todo }) => {
	const { task, completed, id } = todo;

	const listContext = useContext(ListContext);
	const { deleteTodo, completeTodo, setCurrent, current } = listContext;

	//delete todo
	const onDelete = () => {
		deleteTodo(id);
	};

	//complete todo
	const onComplete = () => {
		completeTodo(id);
	};

	return (
		<div style={{ margin: '0px 100px 0px 0px' }}>
			<ul
				className={
					completed === true ? 'todo-item complete' : 'todo-item incomplete'
				}
			>
				<div className="title-container">
					<li>{task}</li>
				</div>

				<div className="todo-sub-container">
					<li>
						<label className="container">
							<input
								type="checkbox"
								checked={completed === true ? 'checked' : ''}
								onChange={onComplete}
							/>
							<span className="checkmark"></span>
						</label>
					</li>
					<li>
						<i className="fas fa-archive" onClick={onDelete}></i>
						{/* <button onClick={onDelete}>Remove</button> */}
					</li>
					<li>
						{/* setCurrent is called from state, 
					passes the selected todo object */}
						<i className="fas fa-edit" onClick={() => setCurrent(todo)}></i>
						{/* <button onClick={() => setCurrent(todo)}>Edit</button> */}
					</li>
				</div>
			</ul>
		</div>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

export default TodoItem;
