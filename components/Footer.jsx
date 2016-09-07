import React from 'react'
import FilterLink from '../containers/FilterLink.jsx'

const Footer = () => (
	<p>
		Show:
		{" "}
		<FilterLink filter="SHOW_ALL">
			All
		</FilterLink>
		{", "}
		<FilterLink filter="SHOW_ACTIVE">
			Active
		</FilterLink>
		{", "}
		<FilterLink filter="SHOW_ACTIVE">
			Completed
		</FilterLink>
	</p>
)

export default Footer
