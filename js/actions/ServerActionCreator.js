var Dispatcher = require('../dispatcher/Dispatcher');

module.exports = {

  receiveTodos: function(todos) {
    Dispatcher.handleServerAction({
      actionType: 'GET_ALL_TODO',
      todos: todos
    });
  },

  createTodo: function (todo) {
  	Dispatcher.handleServerAction({
      actionType: 'ADD_ITEM',
      todo: todo
    });
  },

  updateTodo: function (todo) {
  	Dispatcher.handleServerAction({
      actionType: 'UPDATE_TODO',
      todo: todo
    });
  },

  removeTodo: function (todo) {
  	Dispatcher.handleViewAction({
			actionType: "REMOVE_ITEM",
			todo: todo
		});
  },

  toggleCompleteAll: function (completeAll) {
  	Dispatcher.handleViewAction({
			actionType: "TOGGLE_COMPLETE_ALL",
			completeAll: completeAll
		});
  },

  destroyCompletedTodos: function () {
  	Dispatcher.handleViewAction({
			actionType: "DESTROY_COMPLETED_TODOS"
		});
  }
};