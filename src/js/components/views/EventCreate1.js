import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
import EventHeader from '../createEvent/EventHeader';
import Event1Form from '../createEvent/Event1Form';
import { bindActionCreators } from 'redux';
// import { createEvent } from '../../actions/getEvent';
import { findEventByCreatorId } from '../../actions/findEventByCreatorId';
import Event2Event from '../createEvent/Event2Event';

class EventCreate extends Component {
  constructor() {
    super();
  }


  componentWillMount(){
    this.props.findEventByCreatorIdAction(this.props.login.userData.id)
  }




  render () {
    if (!this.props.login.loggedIn) {
      return (
        <Redirect to={ '/login'}/>
      )
    }

    let fetchedEvents = this.props.findEventByCreatorId.eventData

    let myEvents;

    if(this.props.findEventByCreatorId.eventData){
      myEvents = fetchedEvents.map((event, idx) => {
        let selected = false;
        // if(this.state.selectedEvent == event.id){
        //   selected = true;
        // }
        return <Event2Event
          selected={selected}
          key={event.id}
          idx={idx}
          event={event}
          selectEvent={this.selectEvent}
          />
      })
    }


    return (
      <div className="container">
        <div className="row margin-top">
          <EventHeader />
          <div className="col-md-5 col-md-offset-1">
            <h4>Make a new event</h4>
            <Event1Form />
          </div>
          <div className="col-md-6 ">
            <h4>Manage a created event</h4>
            <div className="row margin-top">
              <div className="col-md-12">
                <h6>Select an event to manage invitees</h6>
                {this.props.findEventByCreatorId.eventData ? myEvents : "You have no events"}
                <div className="margin-top">
                  {this.props.eventCreation.eventId ? <Link to={'/event/create/2'}>Invite Friends</Link> : 'Select an event'}
                </div>


              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    findEventByCreatorId: state.findEventByCreatorId,
    eventCreation: state.eventCreation
  }
}

function matchDispatchToProps(dispatch){
  return {
    findEventByCreatorIdAction: bindActionCreators(findEventByCreatorId, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(EventCreate);
