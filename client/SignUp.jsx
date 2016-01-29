const { Link } = ReactRouter;
SignUp = React.createClass({
  render(){
    return (
      <div> 
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <p>SignUp</p>
      </div>
    );
  }
});