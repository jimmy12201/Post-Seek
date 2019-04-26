import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class EmployerHomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [
                {
                    name: 'job1'
                }, {
                    name: 'job2'
                }
            ]
        }
    }

    render() {
        return(
            <div>
                <h1>Employer View</h1>
            </div>
        )
    }

    
}

function mapStateToProps({user}){
	return {user};
}

export default connect(mapStateToProps)(EmployerHomeComponent);