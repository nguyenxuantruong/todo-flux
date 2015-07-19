var React = require('react'),
	TodoAction = require('../actions/TodoAction');

var TodoTextInput = React.createClass({
	handleKeyDown: function (evt) {
		if(evt.keyCode === 13 &&  evt.target.value.trim() !== '') {
			newTodo = {
				text: evt.target.value,
				complete: false
			};
			evt.target.value = '';
			TodoAction.addTodo(newTodo);
		}
	},
	render: function() {
		return (
			<header id="header">
        <h1>todos</h1>
          <input
						id="new-todo"
		        placeholder="What needs to be done?"
		        onKeyDown={this.handleKeyDown}
		        autoFocus={true}/>
      </header>
		);
	}

});

module.exports = TodoTextInput;