import React, { Component } from 'react';
import EmployerHomeComponent from './EmployerHomeComponent';
import EmployeeHomeComponent from './EmployeeHomeComponent'
import { connect } from 'react-redux';
import './HomeStyle.css';

class HomeComponent extends Component {
    constructor(props) {
        super (props);

        this.state = {
            jobs: []
        };
        this.renderHomeView = this.renderHomeView.bind(this);
    }


    renderHomeView() {
        if (this.props.user.employeeLoggedIn) {
            return <EmployeeHomeComponent/>
        } else if(this.props.user.employerLoggedIn) {
            return <EmployerHomeComponent history={this.props.history}/>
        }else {
            return (
                <div>
                    <header id="home-section">
                        <div className="dark-overlay">
                            <div className="home-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 d-none d-lg-block text-white">
                                        <h1 className="display-4">Build your<strong> Job Profile</strong> and <strong>automate</strong> the job search!</h1>
                                        <div className="d-flex flex-row">
                                        <div className="p-4 align-self-end">
                                            Create an account or sign in and easily find jobs that match to you!
                                        </div>
                                        </div>

                                        <div className="d-flex flex-row">
                                        <div className="p-4 align-self-end">
                                            Many domains and jobs to find!
                                        </div>
                                        </div>
                                        <div className="d-flex flex-row">
                                        <div className="p-4 align-self-end">
                                            Job Searching has never been easier!
                                        </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                    </header>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderHomeView()}
            </div>
        );
    }
}

function mapStateToProps({user}){
	return {user};
}

export default connect(mapStateToProps)(HomeComponent);