var React = require('react'),
	cx = require('react/lib/cx'),
	TodoAction = require('../actions/TodoAction');

var TodoItem = React.createClass({
	getInitialState: function () {
		return {
			editing: false,
			text: this.props.todo.text
		}
	},

	handleRemove: function () {
		TodoAction.removeTodo(this.props.todo);
	},

	handleEdit: function () {
		this.setState({
			editing: true
		});
	},

	updateText: function (evt) {
		if(evt.keyCode === 13) {
			var todo = this.props.todo;
			todo.text = evt.target.value;
			TodoAction.updateTodo(todo);
			this.setState({
				editing: false
			});
		}
	},

	updateState: function () {
		var todo = this.props.todo;
		todo.complete = !todo.complete;
		TodoAction.updateTodo(todo);
	},

	_onChange: function (event) {
		this.setState({
      text: event.target.value
    });
	},

	render: function() {
		var todo = this.props.todo,
			classString = '';
		if(todo.complete) {
			classString += ' completed';
		}
		if(this.state.editing) {
			classString += " editing";
		}
		return (
			<li
				className={classString}
				key={todo.id}>
				<div className="view">
					<input className="toggle" type="checkbox" checked={todo.complete} onChange={this.updateState}/>
					<label onDoubleClick={this.handleEdit}>{todo.text}</label>
					<button className="destroy" onClick={this.handleRemove}/>
				</div>
				<input className="edit" value={this.state.text} onKeyDown={this.updateText} onChange={this._onChange}/>
			</li>
		);
	}
});

module.exports = TodoItem;