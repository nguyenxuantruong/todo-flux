var ServerActionCreators = require('../actions/ServerActionCreator.js'),
	$ = require('jquery'),
	host = 'http://www.localhost:3005/v1/',
	auth_token = '84606402daca42579eedb5f794d7b361';

TodoAPI = {
	getAllTodo: function () {
		$.ajax({
			url: host + 'items',
			method: 'GET',
			data: {
				auth_token: auth_token
			},
			success: function(res) {
        ServerActionCreators.receiveTodos(res);
      }
		});
	},

	addTodo: function (newTodo) {
		$.ajax({
			url: host + 'items',
			method: 'POST',
			data: {
				auth_token: auth_token,
				text: newTodo.text,
				complete: newTodo.complete
			},
			success: function(res) {
        ServerActionCreators.createTodo(res);
      }
		});
	},

	updateTodo: function(todo) {
		$.ajax({
			url: host + 'items/' + todo.id,
			dataType: 'json',
			type: 'PUT',
			data: {
				auth_token: auth_token,
				text: todo.text,
				complete: todo.complete
			},
			success: function(res) {
				ServerActionCreators.updateTodo(res);
      }
		});
	},

	removeTodo: function (todo) {
		$.ajax({
			url: host + 'items/' + todo.id,
			dataType: 'json',
			type: 'DELETE',
			data: {
				auth_token: auth_token,
				id: todo.id
			},
			success: function(res) {
				ServerActionCreators.removeTodo(todo);
      }
		});
	},

	toggleCompleteAll: function (completedAll) {
		$.ajax({
			url: host + 'items',
			dataType: 'json',
			type: 'PUT',
			data: {
				auth_token: auth_token,
				completedAll: completedAll
			},
			success: function(res) {
				ServerActionCreators.toggleCompleteAll(completedAll);
      }
		});
	},

	destroyCompletedTodos: function () {
		$.ajax({
			url: host + 'items',
			dataType: 'json',
			type: 'DELETE',
			data: {
				auth_token: auth_token,
			},
			success: function(res) {
				ServerActionCreators.destroyCompletedTodos();
      }
		});
	}
}

module.exports = TodoAPI;