import React, { Fragment, useContext, useEffect } from 'react';
import TodoItem from './TodoItem';
import ListContext from '../../context/list/listContext';

const TodoList = () => {
	const listContext = useContext(ListContext);

	const { todos, getTodos } = listContext;

	return (
		<div>
			<Fragment>
				{todos.map(todo => (
					<TodoItem todo={todo} key={todo.id} />
				))}
			</Fragment>
		</div>
	);
};

export default TodoList;
