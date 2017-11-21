import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
// import { createEvent } from '../../actions/getEvent';
import { findEventByCreatorId } from '../../actions/findEventByCreatorId';
import Event2Event from './Event2Event';
import FriendsGroup from './friendsDup/FriendsGroup';


class Event2Events
 extends Component {
  constructor() {
    super();
    this.state = {
      selectedEvent: null
    }
  }

  componentWillMount(){
    this.props.findEventByCreatorIdAction(this.props.login.userData.id)
  }

  selectEvent = (eventId) => {
    this.setState({
      selectedEvent: eventId
    })
    console.log(this.state.selectedEvent + " is selected in state");
  }
  // componentDidReceiveProps(nextProps){
  //   if(nextProps !== this.props){
  //     console.log('component did recieve props', nextProps.findEventByCreatorId, this.props.findEventByCreatorId);
  //     this.setState({
  //       updated: true
  //     })
  //   }
  // }


  render () {
    // console.log('findEventByCreatorId', this.props.findEventByCreatorId.eventData);
    // console.log('Event2Events, inviteesObj', this.props.login);
    let fetchedEvents = this.props.findEventByCreatorId.eventData

    let myEvents;

    if(this.props.findEventByCreatorId.eventData){
      myEvents = fetchedEvents.map((event, idx) => {
        let selected = false;
        if(this.state.selectedEvent == event.id){
          selected = true;
        }
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
        <FriendsGroup fetchedEvents={fetchedEvents} selectedEvent={this.state.selectedEvent}/>
        <div className="row margin-top">
          <div className="col-md-4">
            <h6>Select an event to manage invitees</h6>
            {this.props.findEventByCreatorId.eventData ? myEvents : "You have no events"}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    findEventByCreatorId: state.findEventByCreatorId
  }
}

function matchDispatchToProps(dispatch){
  return {
    findEventByCreatorIdAction: bindActionCreators(findEventByCreatorId, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Event2Events
);
