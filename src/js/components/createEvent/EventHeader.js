import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';

class EventHeader extends Component {
  constructor() {
    super();
  }
  render () {


    if(this.props.eventCreation.eventId){
      return (
        <div className="container">
          <div className="eventHeaderGroup">
            <Link to='/event/create/1' className="eventHeaderButton">
              Create New Event
            </Link>
            <Link to='/event/create/2' className="eventHeaderButton">
              Invite Friends
            </Link>
            <Link to='/event/create/3' className="eventHeaderButton">
              Select Date
            </Link>
            <Link to='/event/create/4' className="eventHeaderButton">
              Monitor Event
            </Link>

          </div>
        </div>
      )
    } else {
      return (
        <div className="container">
          <div className="eventHeaderGroup">
            <Link to='/event/create/1' className="eventHeaderButton">
              Create New Event
            </Link>

          </div>
        </div>
      )
    }
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

export default connect(mapStateToProps, null)(EventHeader);
