const { AppBar } = mui;
App = React.createClass({
  componentWillMount() {
    let setNavBarState = function() {
      this.setState({renderNavBar: document.body.clientWidth > 700})
    }.bind(this);
    setNavBarState();
    window.onresize = setNavBarState;
  },
  _onLeftIconButtonTouchTap(){
    this.refs.leftNav.handleToggle();
  },
	render() {
		return(
			<div>
        {this.state.renderNavBar?<NavBar />:<AppBar onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}/>}
        <AppLeftNav ref="leftNav" />
        <br />
        {this.props.children}
			</div>
		);
	}
});