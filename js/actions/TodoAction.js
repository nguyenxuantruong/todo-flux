var Dispatcher = require('../dispatcher/Dispatcher'),
	WebAPIUtils = require('../utils/TodoAPI');

TodoAction = {
	getAllTodo: function() {
    WebAPIUtils.getAllTodo();
  },

  updateTodo: function (todo) {
		WebAPIUtils.updateTodo(todo);
	},

	addTodo: function (newTodo) {
		WebAPIUtils.addTodo(newTodo)
	},

	removeTodo: function (todo) {
		WebAPIUtils.removeTodo(todo);
	},

	toggleCompleteAll: function (completedAll) {
		WebAPIUtils.toggleCompleteAll(completedAll);
	},

	destroyCompletedTodos: function () {
		WebAPIUtils.destroyCompletedTodos();
	}
};

module.exports = TodoAction;