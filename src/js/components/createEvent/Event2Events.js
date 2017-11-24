import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
// import { bindActionCreators } from 'redux';
// // import { createEvent } from '../../actions/getEvent';
// import { findEventByCreatorId } from '../../actions/findEventByCreatorId';
import Event2Event from './Event2Event';
import FriendsGroup from './friendsDup/FriendsGroup';


class Event2Events
 extends Component {
  constructor() {
    super();
    // this.state = {
    //   selectedEvent: null
    // }
  }



  render () {

    let fetchedEvents = this.props.findEventByCreatorId.eventData

    let myEvents;

    if(this.props.findEventByCreatorId.eventData){
      myEvents = fetchedEvents.map((event, idx) => {
        let selected = false;
        if(this.props.eventCreation.eventId == event.id){
          selected = true;
        }
        return <Event2Event
          selected={selected}
          key={event.id}
          idx={idx}
          event={event}
          />
      })
    }



    // return this if somehow an event hasn't been chosen
    if(!this.props.eventCreation.eventId){
      return (
        <div className="container">
          <FriendsGroup fetchedEvents={fetchedEvents} />
          <div className="row margin-top">
            <div className="col-md-12">
              <h6>Select an event to manage invitees</h6>
              {this.props.findEventByCreatorId.eventData ? myEvents : "You have no events"}
            </div>
          </div>

        </div>
      )
    } else {
      return (
        <div className="container">
          <FriendsGroup fetchedEvents={fetchedEvents} />
        </div>
      )
    }
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    findEventByCreatorId: state.findEventByCreatorId,
    eventCreation: state.eventCreation
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     findEventByCreatorIdAction: bindActionCreators(findEventByCreatorId, dispatch),
//   }
// }

export default connect(mapStateToProps, null)(Event2Events
);
