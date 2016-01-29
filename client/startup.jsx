const {
  Router,
  Route,
  browserHistory,
  IndexRoute
} = ReactRouter;

const routes = (
  <Route path="/" component={App} >
	  <Route path="/signup" component={SignUp} />
	  <Route path="/login" component={LogIn} />
	  <Route path="/home" component={Home} />
	  <IndexRoute component={Home} />
  </Route>
)
Meteor.startup(function(){
	ReactDOM.render((
		<Router history={browserHistory}>
			{ routes }
		</Router>
	), document.getElementById('container'));
});