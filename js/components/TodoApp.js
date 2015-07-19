var $ = require('jquery'),
	// request = require('superagent'),
	React = require('react'),
	TodoTextInput = require('./TodoTextInput'),
	MainSection = require('./MainSection'),
	Footer = require('./Footer'),
	TodoStore = require('./../stores/TodoStore'),
	TodoAction = require('./../actions/TodoAction'),
	Router = require('react-router'),
	Route = Router.Route,
	RouteHandler = Router.RouteHandler;

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			allTodos: TodoStore.getAllTodo(),
			areAllComplete: TodoStore.getCheckAll()
		}
	},

	componentDidMount: function () {
		TodoStore.addChangeListener(this._onChange);

		// get all item from backend
		TodoAction.getAllTodo();
	},

	_onChange: function () {
		this.setState({
			allTodos: TodoStore.getAllTodo(),
			areAllComplete: TodoStore.getCheckAll()
		});
	},

	render: function() {
		return (
			<div>
				<h1> todos </h1>
				<TodoTextInput/>
				<RouteHandler allTodos={this.state.allTodos} completeAll={this.state.areAllComplete}/>
				<Footer allTodos={this.state.allTodos}/>
			</div>
		);
	}

});

module.exports = TodoApp;