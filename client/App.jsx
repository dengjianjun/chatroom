const { Link } = ReactRouter;

App = React.createClass({
	render() {
		return(
			<div>
		        <Link to="/">Home</Link>
		        <Link to="/signup">Signup</Link>
		        <Link to="/login">Login</Link>
		        <br />
		        {this.props.children}
			</div>
		)
	}
})