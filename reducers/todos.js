const todo = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false,
			}
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;
			}
			return Object.assign({}, state, {
				completed: !state.completed
			});
		default:
			return state;
	}
}

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action));
		case 'DELETE_TODO':
			return state.filter(t => {
				return (t.id !== action.id);
			})
		case 'GET_TODOS':
			if (!action.savedCookie) {
				return state;
			}
			return action.savedCookie;
		default:
			return state;
	}
}

export default todos
