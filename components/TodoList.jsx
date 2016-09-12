import React, { PropTypes } from 'react'
import Todo from './Todo.jsx'

export default class TodoList extends React.Component {
	propTypes: {
		todos: PropTypes.object.isRequired,
		onTodoClick: PropTypes.func.isRequired,
		onCloseClick: PropTypes.func.isRequired
	}

	render() {
		const { todos, onTodoClick, onCloseClick } = this.props;
		return (
			<div className="todo-list">
				{todos.map(todo =>
					<Todo key={todo.id} {...todo} handleComplete={() => onTodoClick(todo.id)} handleDelete={() => onCloseClick(todo.id)} />
				)}
			</div>
		);
	}
}
