import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';

class EventHeader1 extends Component {
  constructor() {
    super();
  }
  render () {


      return (
        <div className="container">
          <div className="eventHeaderGroup">
            <Link to='/event/create/1' className="eventHeaderButton center">
              <p className="selectedText">Create New Event</p>
            </Link>
            <div className="eventHeaderButtonDead center">
              <p className="eventHeaderButtonTextDead">Invite Friends</p>
            </div>
            <Link to='/event/create/3' className="eventHeaderButtonDead center">
              <p className="eventHeaderButtonTextDead">Select Date</p>
            </Link>
            <Link to='/event/create/4' className="eventHeaderButtonDead center">
              <p className="eventHeaderButtonTextDead">Monitor Event</p>
            </Link>

          </div>
        </div>
      )

  }
}

function mapStateToProps(state, props){
  return {
    eventCreation: state.eventCreation
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     getFriendsAction: bindActionCreators(getFriends, dispatch),
//   }
// }

export default connect(mapStateToProps, null)(EventHeader1);
