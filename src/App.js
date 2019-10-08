import React from 'react';
import ListState from './context/list/ListState';
import TodoList from './components/list/TodoList';
import './App.css';

function App() {
	return (
		<ListState>
			<div>
				<TodoList />
			</div>
		</ListState>
	);
}

export default App;
