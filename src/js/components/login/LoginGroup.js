import React, { Component } from 'react';
import SignUp from './SignUp'
import Login from './Login'
import { connect } from 'react-redux';

class LoginGroup extends Component {
  constructor() {
    super();
  }
  render () {

    // console.log('logingroup this.props.login', this.props.login);
    return (
      <div className="container">

        <div className="row">
          <div className="col-md-4">
            <h2>Create Account</h2>
            {this.props.login.loggedIn === true ? "" : <SignUp /> }

          </div>
          <div className="col-md-4">
            <h2>Log in</h2>
            {this.props.login.loggedIn === true ? "" : <Login /> }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, null)(LoginGroup);
