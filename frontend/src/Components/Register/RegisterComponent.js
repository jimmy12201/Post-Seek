import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './RegisterStyle.css';
import {register} from '../../actions/userActions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import history from '../../history';
import { Dropdown } from 'react-bootstrap';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import choices from '../../Constants/choices';

class RegisterComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
			email: '',
			degree: '',
			domain: '',
			yearsOfExperience: '',
			salaryRange: '',
      password: '',
			confirm: '',
			userInformation: choices
    };
		this.registerUser = this.registerUser.bind(this);
		this.getChoices = this.getChoices.bind(this);
		this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(){
    if(this.props.user.loggedIn){
        history.push('/');
    }
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
    console.log(this.state);
		this.props.register({
			name: this.state.name,
			email: this.state.email,
			degree: this.state.degree,
			domain: this.state.domain,
			yearsOfExperience: this.state.yearsOfExperience,
			salaryRange: this.state.salaryRange,
      password: this.state.password
		});
	}

	getChoices(catagory) {
		let info = this.state.userInformation[catagory];
		return Object.keys(info).map((keyName, i) => (
			<Dropdown.Item key={i} onClick={() => this.setState({[catagory] : info[keyName]})}>{info[keyName]}</Dropdown.Item>
		));
	}

  render(){
    return(
			
      <div className="Login bg-gray">
        <h2> <center> <strong> Jobr Registration  </strong></center> </h2>
        <form onSubmit={this.handleSubmit}>

				<FormGroup controlId="name" bssize="large">
            <FormLabel>name</FormLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="email" bssize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>

					<Dropdown>
							<Dropdown.Toggle>
								Your Degree
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{this.getChoices('degree')}
							</Dropdown.Menu>
						</Dropdown>

						<Dropdown>
							<Dropdown.Toggle>
								Your Domain
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{this.getChoices('domain')}
							</Dropdown.Menu>
						</Dropdown>

						<Dropdown>
							<Dropdown.Toggle>
								Your Years of Experience
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{this.getChoices('yearsOfExperience')}
							</Dropdown.Menu>
						</Dropdown>


						<Dropdown>
							<Dropdown.Toggle>
								Your Salary Range
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{this.getChoices('salaryRange')}
							</Dropdown.Menu>
						</Dropdown>

          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

					<FormGroup controlId="confirm" bssize="large">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              value={this.state.confirm}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

        </form>
        <br />
        <form className="form-inline my-2 my-lg-1">
        	<Button
            block
						bssize = "medium"
						onClick={this.registerUser}
            type="Register">
            Register
          </Button>
        </form>
        <form className="form-inline my-2 my-lg-0">
          <Link to="/"><Button
            block
            bssize = "medium"
            type="Cancel">
            Cancel
          </Button></Link>
        </form>
        
      </div>
    )
  }
}

function mapStateToProps({user}){
	return {user};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({register}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);