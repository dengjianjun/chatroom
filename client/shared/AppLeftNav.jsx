const { LeftNav } = mui;

AppLeftNav = React.createClass({
  getInitialState() {
    return {
      open: false,
    };
  },
  render() {
    return (
      <LeftNav open={this.state.open} 
               docked={false} 
               onRequestChange={open => this.setState({open})} />
    );
  },
  handleToggle() {
    this.setState({open: !this.state.open});
  }
});