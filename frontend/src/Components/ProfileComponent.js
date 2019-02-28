import React, { Component } from 'react';
import choices from '../Constants/choices';
import _ from 'lodash';

class ProfileComponent extends Component {
    constructor(props) {
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
    }

    render() {
        return (
            <div>
                <h1>Profile</h1>
            </div>
        );
    }
}

export default ProfileComponent;