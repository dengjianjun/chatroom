const { Tabs, Tab } = mui;
NavBar = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  _handleChange(value) {
    this.context.router.push(value);
  },
  render() {
    return (
      <div>
        <Tabs onChange={this._handleChange}>
          <Tab label="Home" value="/home" />
          <Tab label="Sign Up" value="/signup" />
          <Tab label="Log In" value="/login" />
        </Tabs>
      </div>
    );
  }
});