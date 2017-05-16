
function actions(store) {

	this.login = (username, password) =>  {
		store.dispatch({
			type: 'server/LOGIN',
			username,
			password
		})
	}

	// function getCourses() {
	// 	store.dispatch({
	// 		type: 'GET_COURSES'
	// 	})
	// }
}

module.exports = actions;