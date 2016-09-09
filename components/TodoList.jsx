import React, { PropTypes } from 'react'
import Todo from './Todo.jsx'

export default class TodoList extends React.Component {
	propTypes: {
		todos: PropTypes.object.isRequired,
		onTodoClick: PropTypes.func.isRequired
	}

	render() {
		const { todos, onTodoClick } = this.props;
		return (
			<ul className="todo-list">
				{todos.map(todo =>
					<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
				)}
			</ul>
		);
	}
}
