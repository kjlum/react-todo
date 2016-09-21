import cookie from 'react-cookie';

const TODO_COOKIE = 'todos';

let nextTodoId = 0;

export const addTodo = (text) => {
	const todoId = nextTodoId++;
	console.log(todoId);
	const savedCookie = cookie.load(TODO_COOKIE);
	if (savedCookie) {
		savedCookie.push({
			id: todoId,
			text,
			completed: false,
		});
		cookie.save(TODO_COOKIE, savedCookie, { path: '/' });
	} else {
		const todoArr = [];
		todoArr.push({
			id: todoId,
			text,
			completed: false,
		})
		cookie.save(TODO_COOKIE, todoArr, { path: '/' });
	}
	return {
		type: 'ADD_TODO',
		id: todoId,
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

export const getTodos = () => {
	const savedCookie = cookie.load(TODO_COOKIE);
	if (savedCookie) {
		for (let i = 0; i < savedCookie.length; i++) {
			console.log(savedCookie[i]);
			if (savedCookie[i].id > nextTodoId) {
				nextTodoId = savedCookie[i].id;
			}
		}
		nextTodoId++;
	}
	return {
		type: 'GET_TODOS',
		savedCookie
	}
}
