var React = require('react'),
	TodoItem = require('./TodoItem'),
	TodoStore = require('./../Stores/TodoStore'),
	TodoAction = require('../actions/TodoAction'),
	Router = require('react-router'),
	_ = require('underscore');

var MainSection = React.createClass({
	mixins: [ Router.State ],

	handleToggleAll: function () {
		TodoAction.toggleCompleteAll(!this.props.completeAll)
	},

	render: function() {
		var allTodos = this.props.allTodos,
			todos = [],
			filteredTodos = {};
		switch(this.getPath()) {
			case '/active':
				filteredTodos = _.pick(allTodos, function (value, key, object) {
					return !value.complete;
				});
				break;

			case '/completed':
				filteredTodos = _.pick(allTodos, function (value, key, object) {
					return value.complete;
				});
				break;

			default:
				filteredTodos = allTodos;
				break;
		};

		// add todo list
		for (var key in filteredTodos) {
			todos.push(<TodoItem key={key} todo={allTodos[key]}/>)
		}

		return (
			<section id="main">
				<input
					id="toggle-all"
					type="checkbox" checked={this.props.completeAll} onChange={this.handleToggleAll}/>
				<label htmlFor="toggle-all"> Mark all as complete</label>
				<ul id="todo-list">{todos}</ul>
			</section>
		);
	}

});

module.exports = MainSection;