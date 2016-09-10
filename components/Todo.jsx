import React, { PropTypes } from 'react'
import { MdHighlightRemove, MdCheckCircle } from 'react-icons/lib/md/';

export default class Todo extends React.Component {
	propTypes: {
		onClick: PropTypes.func.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}

	render() {
		const { onClick, completed, text } = this.props;
		return (
			<div>
				<span className="complete-todo">
					<MdCheckCircle />
				</span>
				<span className="list-item"
					onClick={onClick}
					style={{
						textDecoration: completed ? 'line-through' : 'none'
					}}
				>
					{text}
				</span>
				<span className="delete-todo">
					<MdHighlightRemove />
				</span>
			</div>
		);
	}
}
