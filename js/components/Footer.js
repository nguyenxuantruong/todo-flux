var React = require('react'),
	_ = require('underscore'),
	TodoStore = require('../stores/TodoStore'),
	Router = require('react-router'),
	RouterLink = Router.Link;

var Footer = React.createClass({
	destroyCompletedTodos: function () {
		TodoAction.destroyCompletedTodos();
	},

	render: function() {
		var activeTodos = TodoStore.getActiveTodos(),
			activeCount = _.keys(activeTodos).length,
			itemsLeftPhrase = activeCount > 1 ? "Items" : "Item";
		return (
			<footer id="footer">
				<span id="todo-count">
					<span>{activeCount}</span>
					<span> {itemsLeftPhrase} </span>
					<span>left</span>
				</span>
				<ul id="filters">
					<li>
						<RouterLink activeClassName="selected" to="All">All</RouterLink>
					</li>
					<li>
						<RouterLink activeClassName="selected" to="Active">Active</RouterLink>
					</li>
					<li>
						<RouterLink activeClassName="selected" to="Completed">Completed</RouterLink>
					</li>
				</ul>
				<button id="clear-completed" onClick={this.destroyCompletedTodos}>Clear completed</button>
			</footer>
		);
	}

});

module.exports = Footer;