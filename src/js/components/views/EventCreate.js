import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
// import { bindActionCreators } from 'redux';


class EventCreate extends Component {
  constructor() {
    super();
  }

  render () {
    if (!this.props.login.loggedIn) {
      return (
        <Redirect to={ '/login'}/>
      )
    }
    return (
      <div>EventCreate</div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     loginAction: bindActionCreators(login, dispatch),
//   }
// }

export default connect(mapStateToProps, null)(EventCreate);
