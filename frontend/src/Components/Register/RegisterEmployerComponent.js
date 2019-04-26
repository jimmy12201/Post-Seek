import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './RegisterStyle.css';
import {registerEmployer} from '../../actions/userActions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

class RegisterEmployerComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
        name: '',
        password: '',
        confirm: '',
    };
    

    this.registerUser = this.registerUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

registerUser(event){
    event.preventDefault();
    if(this.state.password !== this.state.confirm){
        return console.log('Passwords are not the same');
    }

    this.props.registerEmployer({
        name: this.state.name,
        password: this.state.password
    }).then((user) => {
        console.log(user);
        this.props.history.push('/');
    });
    
    
}

  render(){
    return(	
      <div className="Login bg-gray">
        <h2> <center> <strong>  Employer Registration </strong></center> </h2>
        <form onSubmit={this.registerUser}>

        <FormGroup controlId="name" bssize="large">
            <FormLabel>Company Name</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="password" bssize="large">
              <FormLabel>Password</FormLabel>
              <FormControl
                autoFocus
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </FormGroup>

        <FormGroup controlId="confirm" bssize="large">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              autoFocus
              type="password"
              value={this.state.confirm}
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button
            block
            className="form-inline my-2 my-lg-1"
            bssize = "medium"
            type="submit">
            Submit
          </Button>

          <Link to="/"><Button
            block
            className="form-inline my-2 my-lg-0"
            bssize = "medium"
            type="Cancel">
            Cancel
          </Button></Link>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({registerEmployer}, dispatch);
}

export default connect(null, mapDispatchToProps)(RegisterEmployerComponent);