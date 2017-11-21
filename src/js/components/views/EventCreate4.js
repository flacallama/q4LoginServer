import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
// import { bindActionCreators } from 'redux';
import EventHeader from '../createEvent/EventHeader'


class EventCreate extends Component {
  constructor() {
    super();
  }

  render () {
    // if (!this.props.login.loggedIn) {
    //   return (
    //     <Redirect to={ '/login'}/>
    //   )
    // }


    return (
      <div className="container">
        <EventHeader />
        EventCreate4
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    // createEventAction: bindActionCreators(createEvent, dispatch),
  }
}

export default connect(mapStateToProps, null)(EventCreate);
