import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './RegisterStyle.css';
import {register, update} from '../../actions/userActions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dropdown } from 'react-bootstrap';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import choices from '../../Constants/choices';

class RegisterComponent extends Component{
  constructor(props){
    super(props);
    if (this.props.user.loggedIn) {
      this.state = {
        name: this.props.user.userInfo.name,
        email: this.props.user.userInfo.email,
        emailPrev: this.props.user.userInfo.email,
        degree: this.props.user.userInfo.degree,
        domain: this.props.user.userInfo.domain,
        yearsOfExperience: this.props.user.userInfo.yearsOfExperience,
        salaryRange: this.props.user.userInfo.salaryRange,
        password: this.props.user.userInfo.password,
        confirm: this.props.user.userInfo.password,
        userInformation: choices
      };
    } else {
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
    }

		this.registerUser = this.registerUser.bind(this);
		this.getChoices = this.getChoices.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderPassword = this.renderPassword.bind(this);
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

    if (this.props.user.loggedIn) {
      this.props.update({
        name: this.state.name,
        email: this.state.email,
        emailPrev: this.state.emailPrev,
        degree: this.state.degree,
        domain: this.state.domain,
        yearsOfExperience: this.state.yearsOfExperience,
        salaryRange: this.state.salaryRange,
      }).then((user) => {
        console.log(this.props);
        this.props.history.push('/');
      });
    } else {
      this.props.register({
        name: this.state.name,
        email: this.state.email,
        degree: this.state.degree,
        domain: this.state.domain,
        yearsOfExperience: this.state.yearsOfExperience,
        salaryRange: this.state.salaryRange,
        password: this.state.password
      }).then((user) => {
        console.log(user);
        this.props.history.push('/');
      });
    }
		
	}

	getChoices(catagory) {
		let info = this.state.userInformation[catagory];
		return Object.keys(info).map((keyName, i) => (
			<Dropdown.Item key={i} onClick={() => this.setState({[catagory] : info[keyName]})}>{info[keyName]}</Dropdown.Item>
		));
  }
  
  renderPassword() {
    if (!this.props.user.loggedIn) {
      return (
        <div>
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
        </div>
      );
    }
  }

  render(){
    let headerText;

    if (this.props.user.loggedIn) {
      headerText = "Profile";
    } else {
      headerText = "Jobr Registration";
    }

    let submitText;
    if (this.props.user.loggedIn) {
      submitText = "Update Profile";
    } else {
      submitText = "Register";
    }

    let degreeText = this.state.degree == '' ? 'Your Degree' : this.state.degree;
    let domainText = this.state.domain == '' ? 'Your Domain' : this.state.domain;
    let yearsOfExperienceText = this.state.yearsOfExperience == '' ? 'Your Years of Experience' : this.state.yearsOfExperience;
    let salaryRangeText = this.state.salaryRange == '' ? 'Your Salary Range' : this.state.salaryRange;


    return(
			
      <div className="Login bg-gray">
        <h2> <center> <strong>  {headerText} </strong></center> </h2>
        <form onSubmit={this.registerUser}>

				<FormGroup controlId="name" bssize="large">
            <FormLabel>Name</FormLabel>
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

					<Dropdown className="form-inline my-2 my-lg-1">
							<Dropdown.Toggle>
								{degreeText}
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{this.getChoices('degree')}
							</Dropdown.Menu>
						</Dropdown>

						<Dropdown className="form-inline my-2 my-lg-1">
							<Dropdown.Toggle>
								{domainText}
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{this.getChoices('domain')}
							</Dropdown.Menu>
						</Dropdown>

						<Dropdown className="form-inline my-2 my-lg-1">
							<Dropdown.Toggle>
								{yearsOfExperienceText}
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{this.getChoices('yearsOfExperience')}
							</Dropdown.Menu>
						</Dropdown>


						<Dropdown className="form-inline my-2 my-lg-1">
							<Dropdown.Toggle>
								{salaryRangeText}
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{this.getChoices('salaryRange')}
							</Dropdown.Menu>
						</Dropdown>

            {this.renderPassword()}

          <Button
            block
            className="form-inline my-2 my-lg-1"
            bssize = "medium"
            // onClick={this.registerUser}
            type="submit">
            {submitText}
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

function mapStateToProps({user}){
	return {user};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({register, update}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);