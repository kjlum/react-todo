import cookie from 'react-cookie';

const TODO_COOKIE = 'todos';

let nextTodoId = 0;

export const addTodo = (text) => {
	const savedCookie = cookie.load(TODO_COOKIE);
	console.log(savedCookie);
	if (savedCookie) {
		if (savedCookie.indexOf(text) === -1) {
			savedCookie.push({ [text]: false  })
			cookie.save(TODO_COOKIE, savedCookie, { path: '/' });
		} else {
			// TODO: dispatch error
			// return { type: 'ADD_ERROR', text }
		}
	} else {
		const todoArr = [];
		todoArr.push({ [text]: false })
		cookie.save(TODO_COOKIE, todoArr, { path: '/' });
	}
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}

export const deleteTodo = (id) => {
	return {
		type: 'DELETE_TODO',
		id
	}
}
