import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import TableComponent from './TableComponent'
import axios from 'axios';
import {connect} from 'react-redux';
import './HomeStyle.css';

class HomeComponent extends Component {
    constructor(props) {
        super (props);

        this.state = {
            viewTable: false,
            jobs: []
        };

        this.recommendJobs = this.recommendJobs.bind(this);
        this.renderHomeView = this.renderHomeView.bind(this);
    }

    recommendJobs() {
        axios.get(`http://localhost:8080/job/${this.props.user.userInfo.email}`)
        .then((response) =>{
            console.log(response.data);
            this.setState({jobs: response.data.jobs});
        });
    }

    renderHomeView() {
        if (this.props.user.loggedIn) {
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
            
                    <TableComponent jobs={this.state.jobs}/>
                </div>
                );
        } else {
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
                                        Job Searching never got easier!
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