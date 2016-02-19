const { AppBar } = mui;
App = React.createClass({
  componentWillMount() {
    let setNavBarState = function() {
      this.setState({renderNavBar: document.body.clientWidth > 700})
    }.bind(this);
    setNavBarState();
    window.onresize = setNavBarState;
  },
	render() {
		return(
			<div>
        {this.state.renderNavBar?<NavBar />:<AppBar />}
        <br />
        {this.props.children}
			</div>
		);
	}
});