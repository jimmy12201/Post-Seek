import React, { Component } from 'react';
import choices from '../Constants/choices';
import { connect } from 'react-redux';

import HeaderComponent from './HeaderComponent';
import RegisterComponent from './Register/RegisterComponent';
import history from '../history';

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     name: '',
        //     email: '',
        //     degree: '',
        //     domain: '',
        //     yearsOfExperience: '',
        //     salaryRange: '',
        //     password: '',
        //     confirm: '',
        //     userInformation: choices
        //   };

        console.log(this.props.userInfo);
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <RegisterComponent />
            </div>
        );
    }
}

function mapStateToProps({user}){
    return {user};
}

export default connect(mapStateToProps) (ProfileComponent);