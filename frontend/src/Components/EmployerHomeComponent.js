import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class EmployerHomeComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            jobs: [
                {
                    name: 'job1'
                }, {
                    name: 'job2'
                }
            ]
        }

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
                </div>
            </div>
        )
    }

    
}

function mapStateToProps({user}){
	return {user};
}

export default connect(mapStateToProps)(EmployerHomeComponent);