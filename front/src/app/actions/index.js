
function actions(store) {

	this.login = (username, password) =>  {
		store.dispatch({
			type: 'server/LOGIN',
			username,
			password
		})
	}

	this.getCourses = () =>  {
		store.dispatch({
			type: 'server/GET_COURSES'
		})
	}

	this.getLectors = () =>  {
		store.dispatch({
			type: 'server/GET_LECTORS'
		})
	}

	this.addLector = (ids, name, faculty, cafedra) =>  {
		store.dispatch({
			type: 'server/ADD_LECTOR',
			ids,
			name,
			faculty,
			cafedra
		})
	}

	this.addCourse = (ids, name, description) =>  {
		store.dispatch({
			type: 'server/ADD_COURSE',
			ids,
			name,
			description
		})
	}

	// function getCourses() {
	// 	store.dispatch({
	// 		type: 'GET_COURSES'
	// 	})
	// }
}

module.exports = actions;