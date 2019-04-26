import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeTableComponent from './tables/EmployeeTableComponent';
import axios from 'axios';

class EmployeeHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.recommendJobs = this.recommendJobs.bind(this);
        this.state = {
            jobs: []
        };
    }


    recommendJobs() {
        axios.get(`http://localhost:8080/job/${this.props.user.userInfo.email}`)
        .then((response) =>{
            this.setState({jobs: response.data.jobs});
        });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <div className="d-flex justify-content-center">
                        <button id="singlebutton" name="singlebutton" className="btn btn-primary"
                        onClick={this.recommendJobs}>
                        Find Jobs!
                        </button>
                    </div>
                </div>
        
                <EmployeeTableComponent jobs={this.state.jobs}/>
            </div>
            );
    }
}

function mapStateToProps({user}){
	return {user};
}

export default connect(mapStateToProps)(EmployeeHomeComponent);

