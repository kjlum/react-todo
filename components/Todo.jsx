import React, { PropTypes } from 'react'

export default class Todo extends React.Component {
	propTypes: {
		onClick: PropTypes.func.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}

	render() {
		const { onClick, completed, text } = this.props;
		return (
			<li className="list-item"
				onClick={onClick}
				style={{
					textDecoration: completed ? 'line-through' : 'none'
				}}
			>
				{text}
			</li>
		);
	}
}
