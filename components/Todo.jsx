import React, { PropTypes } from 'react'
import { MdHighlightRemove } from 'react-icons/lib/md/';

export default class Todo extends React.Component {
	propTypes: {
		handleComplete: PropTypes.func.isRequired,
		handleDelete: PropTypes.func.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}

	render() {
		const { handleComplete, handleDelete, completed, text } = this.props;
		return (
			<div>
				<span className="list-item">
					<span
						onClick={handleComplete}
						style={{
							textDecoration: completed ? 'line-through' : 'none'
						}}
					>
						{text}
					</span>
					<span className="delete-todo" onClick={handleDelete}>
						<MdHighlightRemove />
					</span>
				</span>
			</div>
		);
	}
}
