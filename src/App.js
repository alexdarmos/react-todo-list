import React from 'react';
import ListState from './context/list/ListState';
import TodoList from './components/list/TodoList';
import TodoForm from './components/list/TodoForm';

import './App.css';

function App() {
	return (
		<ListState>
			<div>
				<TodoList />
				<TodoForm />
			</div>
		</ListState>
	);
}

export default App;
