import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderComponent from './HeaderComponent';
import RegisterComponent from './Register/RegisterComponent';
import { bindActionCreators } from 'redux';

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <RegisterComponent history={this.props.history}/>
            </div>
        );
    }
}

function mapStateToProps({user}){
    return {user};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (ProfileComponent);