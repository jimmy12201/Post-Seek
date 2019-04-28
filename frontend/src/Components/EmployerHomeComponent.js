import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import EmployerTableComponent from './tables/EmployerTableComponent';

class EmployerHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        };
        
        axios.get(`http://localhost:8080/job/company/${this.props.user.userInfo.name}`)
        .then((response) =>{
            console.log(response.data);
            this.setState({jobs: response.data.jobs});
        });
        


        this.goToCreateJob = this.goToCreateJob.bind(this);
    }

    goToCreateJob(event) {
        event.preventDefault();
        this.props.history.push('/createJob');
    }

    render() {
        return(
            <div>
                <h1>Employer View</h1>
                <div className="form-group">
                    <div className="d-flex justify-content-center">
                        <button id="singlebutton" name="singlebutton" className="btn btn-primary"
                        onClick={this.goToCreateJob}>
                        Create a Job!
                        </button>
                    </div>
                    
                    <EmployerTableComponent jobs = {this.state.jobs} />
                </div>
            </div>
        )
    }

    
}

function mapStateToProps({user}){
	return {user};
}

export default connect(mapStateToProps)(EmployerHomeComponent);