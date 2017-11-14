import React, { Component } from 'react';
import SignUp from './SignUp'
import Login from './Login'
import { connect } from 'react-redux';

class LoginGroup extends Component {
  constructor() {
    super();
  }
  render () {

    console.log('logingroup this.props.login', this.props.login);
    return (
      <div>
        {this.props.login ? <SignUp /> : "signup"  }
        <Login />
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
