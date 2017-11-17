import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putEvent, getEvents } from '../../actions/getEvents';


class Event extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    // this.props.putEventAction()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getEvents != this.props.getEvents){
      console.log('nextprops hit;', nextProps)
      this.props.getEventsAction()
      // if(nextProps.getEvents){
      //   // console.log('elem hit;')
      //   this.setState({ updated: true })
      // }
    }
  }


  acceptButton = (e) => {
    let userId = this.props.login.userData.id
    let invitees = this.props.elem.invitees
    let eventId = this.props.elem.id;
    invitees[userId] = "accepted";
    this.props.putEventAction(eventId, invitees)
    e.preventDefault()
  }

  maybeButton = (e) => {
    let userId = this.props.login.userData.id
    let invitees = this.props.elem.invitees
    let eventId = this.props.elem.id;
    invitees[userId] = "maybe";
    this.props.putEventAction(eventId, invitees)
    e.preventDefault()
  }

  declineButton = (e) => {
    let userId = this.props.login.userData.id
    let invitees = this.props.elem.invitees
    let eventId = this.props.elem.id;
    invitees[userId] = "declined";
    this.props.putEventAction(eventId, invitees)
    e.preventDefault()
  }



  render () {


    let userId = this.props.login.userData.id
    let eventType = null;
    let pathid = "/events/" + this.props.elem.id
    let event = this.props.elem
    // console.log('event', event.invitees[userId])
    switch(event.invitees[userId]) {
      case "invited":
        // console.log("they type is invited");
        eventType = "invited";
        break;
      case "declined":
        // console.log("they type is declined");
        eventType = "declined";
        break;
      case "accepted":
        // console.log("they type is accepted");
        eventType = "accepted";
        break;
      case "maybe":
        // console.log("they type is maybe");
        eventType = "maybe";
        break;
      default:
        eventType = null;
    }


    return (
      <Link to={pathid}>
        <div className="eventSingle">
          <div className={eventType}>
            <h3>{event.title}</h3>
            <p>{event.body}</p>
            <div>
              {eventType === "invited" ? <div><button onClick={this.acceptButton}>Accept</button><button onClick={this.declineButton}>Decline</button><button onClick={this.maybeButton}>Maybe</button></div> : ''}
              {eventType === "declined" ? <div><button onClick={this.acceptButton}>Accept</button><button onClick={this.maybeButton}>Maybe</button></div> : ''}
              {eventType === "maybe" ? <div><button onClick={this.acceptButton}>Accept</button><button onClick={this.declineButton}>Decline</button></div> : ''}
              {eventType === "accepted" ? <div><button onClick={this.declineButton}>Decline</button><button onClick={this.maybeButton}>Maybe</button></div> : ''}
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

function mapStateToProps(state, props){
  return {
    getEvents: state.getEvents,
    login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    getEventsAction: bindActionCreators(getEvents, dispatch),
    putEventAction: bindActionCreators(putEvent, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Event);
