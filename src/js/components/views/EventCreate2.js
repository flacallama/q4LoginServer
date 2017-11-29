import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
// import { bindActionCreators } from 'redux';
import EventHeader2 from '../createEvent/EventHeader2'

import Event2Events from '../createEvent/Event2Events'

class EventCreate2 extends Component {
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
      <div className="container">
        <div id="eventCreationGroup" className="row margin-top">

          <EventHeader2 />

          <Event2Events />
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

function matchDispatchToProps(dispatch){
  return {
    // createEventAction: bindActionCreators(createEvent, dispatch),
  }
}

export default connect(mapStateToProps, null)(EventCreate2);
