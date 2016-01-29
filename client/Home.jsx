const { Link } = ReactRouter;
Home = React.createClass({
  render(){
    return (
      <div> 
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <p>Home</p>
      </div>
    );
  }
});