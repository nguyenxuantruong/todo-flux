var $ = require('jquery'),
	_ = require('underscore'),
	EventEmitter = require('events').EventEmitter,
	Dispatcher = require('../dispatcher/Dispatcher'),
	CHANGE_EVENT = "change";

var _todos = [];

removeTodo = function (todo) {
	var index = _todos.indexOf(todo);
	_todos.splice(index, 1);
}

updateTodo = function (todo) {
	todoLength = _todos.length;
	for(var i = 0; i < todoLength; i++) {
		if(_todos[i].id === todo.id) {
			_todos[i] = todo;
			break;
		}
	}
}

update = function (newTodo) {
	// find todo
	var currentTodo = _.find(_todos, function (todo) {
		return todo.id === newTodo.id;
	});

	// update todo
	if(currentTodo) {
		currentTodo = _.extend({}, currentTodo, newTodo);
		updateTodo(currentTodo);
	}
}

updateAll = function(complete) {
	for(var i in _todos) {
		_todos[i].complete = complete;
	}
};

destroyCompletedTodos = function () {
	for(var i in _todos) {
		if(_todos[i].complete) {
			removeTodo(_todos[i]);
		}
	}
};

var TodoStore = _.extend({}, EventEmitter.prototype, {
	getAllTodo: function() {
		return _todos;
	},

	getCheckAll: function () {
		for(var i in _todos) {
			if(!_todos[i].complete) {
				return false;
			}
		}
		return true;
	},

	getActiveTodos: function () {
		return _.pick(_todos, function (value, key, object) {
			return !value.complete;
		});
	},

	getCompletedTodos: function () {
		return _.pick(_todos, function (value, key, object) {
			return value.complete;
		});
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	}
});

Dispatcher.register(function (payload) {
	var action = payload.action;

	switch(action.actionType) {
		case "GET_ALL_TODO":
			_todos = action.todos;
			TodoStore.emit(CHANGE_EVENT);
			break;

		case "ADD_ITEM":
			_todos.push(action.todo);
			TodoStore.emit(CHANGE_EVENT);
			break;

		case "REMOVE_ITEM":
			removeTodo(action.todo);
			TodoStore.emit(CHANGE_EVENT);
			break;

		case "UPDATE_TODO":
			update(action.todo);
			TodoStore.emit(CHANGE_EVENT);
			break;

		case "TOGGLE_COMPLETE_ALL":
			updateAll(action.completeAll);
			TodoStore.emit(CHANGE_EVENT);
			break;

		case "DESTROY_COMPLETED_TODOS":
			destroyCompletedTodos();
			TodoStore.emit(CHANGE_EVENT);
			break;
	}
});

module.exports = TodoStore;