import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './JobStyle.css';
import {createJob} from '../../actions/jobActions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, FormGroup, FormControl, FormLabel, Dropdown } from 'react-bootstrap';
import choices from '../../Constants/choices';

class CreateJobComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      description: '',
      degree: '',
      domain: '',
      yearsOfExperience: '',
      salaryRange: '',
      applyLink: '',
      userInformation: choices
    };

    this.createJob = this.createJob.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(event) {
  this.setState({
    [event.target.id]: event.target.value
  });
}

getChoices(catagory) {
  let info = this.state.userInformation[catagory];
  return Object.keys(info).map((keyName, i) => (
    <Dropdown.Item key={i} onClick={() => this.setState({[catagory] : info[keyName]})}>{info[keyName]}</Dropdown.Item>
  ));
}

createJob(event){
    event.preventDefault();

    this.props.createJob({
        name: this.state.name,
        company: this.props.user.userInfo.name,
        description: this.state.description,
        degree: this.state.degree,
        domain: this.state.domain,
        yearsOfExperience: this.state.yearsOfExperience,
        salaryRange: this.state.salaryRange,
        applyLink: this.state.applyLink
    }).then((user) => {
        console.log(user);
        this.props.history.push('/');
    });
    
    
}

render(){

  let degreeText = this.state.degree == '' ? 'Your Degree' : this.state.degree;
  let domainText = this.state.domain == '' ? 'Your Domain' : this.state.domain;
  let yearsOfExperienceText = this.state.yearsOfExperience == '' ? 'Your Years of Experience' : this.state.yearsOfExperience;
  let salaryRangeText = this.state.salaryRange == '' ? 'Your Salary Range' : this.state.salaryRange;


  return(
    
    <div className="Login bg-gray">
      <h2> <center> <strong>  Create a Job! </strong></center> </h2>
      <form onSubmit={this.createJob}>

      <FormGroup controlId="name" bssize="large">
          <FormLabel>Job Title</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="description" bssize="large">
          <FormLabel>Description</FormLabel>
          <textarea id="description" className="form-control" value={this.state.description} onChange={this.handleChange} rows="3"></textarea>
        </FormGroup>

        Degree
        <Dropdown className="form-inline my-2 my-lg-1">
            <Dropdown.Toggle>
              {degreeText}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {this.getChoices('degree')}
            </Dropdown.Menu>
          </Dropdown>

          Domain
          <Dropdown className="form-inline my-2 my-lg-1">
            <Dropdown.Toggle>
              {domainText}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {this.getChoices('domain')}
            </Dropdown.Menu>
          </Dropdown>

          Years of Experience
          <Dropdown className="form-inline my-2 my-lg-1">
            <Dropdown.Toggle>
              {yearsOfExperienceText}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {this.getChoices('yearsOfExperience')}
            </Dropdown.Menu>
          </Dropdown>

          Salary Range
          <Dropdown className="form-inline my-2 my-lg-1">
            <Dropdown.Toggle>
              {salaryRangeText}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {this.getChoices('salaryRange')}
            </Dropdown.Menu>
          </Dropdown>

          <FormGroup controlId="applyLink" bssize="large">
          <FormLabel>Application Link</FormLabel>
          <FormControl
            type="text"
            value={this.state.applyLink}
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button
          block
          className="form-inline my-2 my-lg-1"
          bssize = "medium"
          type="submit">
          Create Job!
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

function mapStateToProps({user}) {
  return {user};
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({createJob}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJobComponent);