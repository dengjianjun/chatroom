const {
  Router,
  Route,
  browserHistory
} = ReactRouter;

Meteor.startup(function(){
	ReactDOM.render((
		<Router history={browserHistory}>
		  <Route path="/" component={Home} />
		  <Route path="/signup" component={SignUp} />
		</Router>
	), document.getElementById('container'));
});