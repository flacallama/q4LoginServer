import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
// import { bindActionCreators } from 'redux';
import EventHeader from '../createEvent/EventHeader';
import FriendsGroup from '../createEvent/friendsDup/FriendsGroup';

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

    // let myEvents;

    if(this.props.getEvent.eventsByUser){

      var fetchedEvents = this.props.getEvent.eventsByUser.eventData

      // myEvents = fetchedEvents.map((event, idx) => {
      //
      //   return <Event2Event
      //     key={event.id}
      //     idx={idx}
      //     event={event}
      //     />
      // })
    }


    // <div className="row margin-top">
    //   <div className="col-md-12">
    //     <h6>Select an event to manage invitees</h6>
    //     {this.props.findEventByCreatorId.eventData ? myEvents : "You have no events"}
    //   </div>
    // </div>

    // return this if somehow an event hasn't been chosen
    // if(!this.props.eventCreation.eventId){
    //   return (
    //     <div className="container">
    //       <EventHeader />
    //       <FriendsGroup fetchedEvents={fetchedEvents} />
    //
    //     </div>
    //   )
    // } else {
      return (
        <div className="container">
          <EventHeader />
          <FriendsGroup fetchedEvents={fetchedEvents} />
        </div>
      )
    // }
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    getEvent: state.getEvent,
    eventCreation: state.eventCreation
  }
}

function matchDispatchToProps(dispatch){
  return {
    // createEventAction: bindActionCreators(createEvent, dispatch),
  }
}

export default connect(mapStateToProps, null)(EventCreate);
