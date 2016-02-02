App = React.createClass({
	render() {
		return(
			<div>
        <NavBar />
        <br />
        {this.props.children}
			</div>
		);
	}
});