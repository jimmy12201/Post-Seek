import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import { bindActionCreators } from 'redux';
import { signInEmployee, signInEmployer } from '../../actions/userActions';
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
    this.signInEmployer = this.signInEmployer.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  signInEmployer() {
    this.props.signInEmployer(this.state).then(() => {
      this.props.history.push('/');
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signInEmployee(this.state).then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div className="Login bg-light">
        <h2> <center> <strong> Post-Seek login  </strong></center> </h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email / Company</FormLabel>
            <FormControl
              autoFocus
              type="text"
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
            Login as Employee
          </Button>
          <Button
            onClick={this.signInEmployer}
            block
            bsSize="large">
            Login as Employer
          </Button>

        </form>
        <br />
        <form className="form-inline my-2 my-lg-1">
          <Link to="/register"><Button
            block
            bsSize = "medium"
            type="Register">
            Register Employee
          </Button></Link>
          <Link to="/registerEmployer"><Button
            block
            bsSize = "medium"
            type="Register">
            Register Employer
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
  return bindActionCreators({signInEmployee, signInEmployer}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);