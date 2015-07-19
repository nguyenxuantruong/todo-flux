var React = require('react');
var Router = require('react-router');
var routes = require('./router');
window.React = React;

Router.run(routes, function (Handler, state) {
  React.render(<Handler/>, document.getElementById('todoapp'));
});