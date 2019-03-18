import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import { bindActionCreators } from 'redux';
import { signIn } from '../../actions/userActions';
import "./login.css";


class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signIn(this.state).then(() => {
      this.props.history.push('/');
    });
  }

  render() {

    // if(this.props.user.isLoggedIn){
    //   return <Redirect to="/" />
    // }
    return (
      <div className="Login bg-light">
        <h2> <center> <strong> Jobr login  </strong></center> </h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit">
            Login
          </Button>
        </form>
        <br />
        <form className="form-inline my-2 my-lg-1">
          <Link to="/Register"><Button
            block
            bsSize = "medium"
            type="Register">
            Register
          </Button></Link>
        </form>
        <form className="form-inline my-2 my-lg-0">
          <Link to="/"><Button
            block
            bsSize = "medium"
            type="Cancel">
            Cancel
          </Button></Link>
        </form>
        
      </div>
    );
  }
}

function mapStateToProps({user}){
  return {user};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({signIn}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);