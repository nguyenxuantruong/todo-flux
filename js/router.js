var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var TodoApp = require('./components/TodoApp');
var MainSection = require('./components/MainSection');

module.exports = (
  <Route name="app" path="/" handler={TodoApp}>
    <DefaultRoute handler={MainSection}/>
  	<Route name="Active" path="/active" handler={MainSection}/>
  	<Route name="Completed" path="/completed" handler={MainSection}/>
  	<Route name="All" path="/all" handler={MainSection}/>
  </Route>
);