import React, { PropTypes } from 'react'

export default class Link extends React.Component {
	propTypes: {
		active: PropTypes.bool.isRequired,
		children: PropTypes.node.isRequired,
		onClick: PropTypes.func.isRequired
	}

	render() {
		const { active, children, onClick } = this.props;
		if (active) {
			return <span className="link-item active">{children}</span>
		}
		return (
			<span className="link-item"
				onClick={e => {
					 e.preventDefault();
					 onClick();
				}}
			>
				{children}
			</span>
		);
	}
}
