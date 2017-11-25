import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putEvent } from '../../actions/getEvent';


class Event extends Component {
  constructor() {
    super();
  }



  acceptButton = (e) => {
    let userId = this.props.login.userData.id
    let inviteesObj = this.props.elem.inviteesObj
    let eventId = this.props.elem.id;
    // console.log('accept button', inviteesObj, eventId);
    inviteesObj[userId] = "accepted";
    this.props.putEventAction(eventId, inviteesObj)
    e.preventDefault()
    e.stopPropagation()

  }

  maybeButton = (e) => {
    let userId = this.props.login.userData.id
    let inviteesObj = this.props.elem.inviteesObj
    let eventId = this.props.elem.id;
    inviteesObj[userId] = "maybe";
    this.props.putEventAction(eventId, inviteesObj)
    e.preventDefault()
  }

  declineButton = (e) => {
    let userId = this.props.login.userData.id
    let inviteesObj = this.props.elem.inviteesObj
    let eventId = this.props.elem.id;
    inviteesObj[userId] = "declined";
    this.props.putEventAction(eventId, inviteesObj)
    e.preventDefault()
  }



  render () {


    let userId = this.props.login.userData.id
    let eventType = null;
    let pathid = "/events/" + this.props.elem.id
    let event = this.props.elem
    // console.log('event', event.invitees[userId])
    switch(event.inviteesObj[userId]) {
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
      case "hosting":
        // console.log("they type is hosting");
        eventType = "hosting";
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
    getEvent: state.getEvent,
    // getEvent: state.getEvent,
    login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    // getEventAction: bindActionCreators(getEvent, dispatch),
    putEventAction: bindActionCreators(putEvent, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Event);
