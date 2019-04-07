import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import TableComponent from './TableComponent'
import axios from 'axios';
import {connect} from 'react-redux';

class HomeComponent extends Component {
    constructor(props) {
        super (props);

        this.state = {
            viewTable: false,
            jobs: []
        };

        this.recommendJobs = this.recommendJobs.bind(this);
    }

    recommendJobs() {
        axios.get('http://localhost:8080/job/all')
        .then((response) =>{
            this.setState({jobs: response.data.jobs})
        });
    }

    render() {

        
        return (
            <div>
                <div class="form-group">
                    <div class="d-flex justify-content-center">
                        <button id="singlebutton" name="singlebutton" class="btn btn-primary"
                        onClick={this.recommendJobs}>
                        Find Jobs!
                        </button>
                    </div>
                </div>

                <TableComponent jobs={this.state.jobs}/>
            </div>
        );
    }
}

function mapStateToProps({user}){
	return {user};
}

export default connect(mapStateToProps)(HomeComponent);