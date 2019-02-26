import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/userActions';
import { bindActionCreators } from 'redux';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.renderSignIn = this.renderSignIn(this);
    }

    renderSignIn() {
        if (this.props.user.loggedIn) {
            return (
                <div>
                    <span><strong>{this.props.user.userInfo.name}</strong></span>
                    <form className="form-inline my-2 my-lg-0">
                    <Link to="/profile"><button className="btn btn-outline-success my-2 my-sm-0 m-2" type="submit">Profile</button></Link>
                    <Link to="/"><button onClick={this.props.signOut()} className="btn btn-outline-success my-2 my-sm-0" type="submit">Log Out</button></Link>
                  </form>
                </div>
            )
        } else {
            return(
                <form className="form-inline my-2 my-lg-0">
                  <Link to="/login"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Log in</button></Link>
                </form>
            );
        }
    }

    render() {
          return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <Link className="navbar-brand" to="/">Jobr</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
    
                    {/* <li className="nav-item active">
                      <Link className="navbar-brand" to="/eventform">Add Events <span className="sr-only">(current)</span></Link>
                    </li> */}
    
                  </ul>
                  {this.renderSignIn}
                </div>
            </nav>
          </div>
          );
        }
}

function mapStateToProps({ user }) {
    return { user };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({signOut}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);