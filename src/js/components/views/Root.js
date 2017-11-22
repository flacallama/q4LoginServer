import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import FriendGroup from '../friends/FriendsGroup';
import EventsGroup from '../events/EventsGroup';
import PendingRequests from '../friends/PendingRequests';

// import { bindActionCreators } from 'redux';


class Root extends Component {
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
      <div className="row">
        <div className="col-md-8">
          <h1>Welcome, {this.props.login.userData.username}</h1>
          <PendingRequests userId={this.props.login.userData.id}/>
          <FriendGroup />
        </div>

        <div className="col-md-4">
          <EventsGroup />
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

// function matchDispatchToProps(dispatch){
//   return {
//     loginAction: bindActionCreators(login, dispatch),
//   }
// }

export default connect(mapStateToProps, null)(Root);
