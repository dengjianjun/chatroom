const {
  Router,
  Route
} = ReactRouter;

Meteor.startup(function(){
	ReactDOM.render((
		<Router>
		  <Route path="/" component={Home} />
		  <Route path="/signup" component={SignUp} />
		</Router>
	), document.getElementById('container'));
});