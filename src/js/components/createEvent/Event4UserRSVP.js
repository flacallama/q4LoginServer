import React, { Component } from 'react';
class Event4UserRSVP extends Component {
  constructor() {
    super();
  }
  render () {
    let elem = this.props.elem
    let eventId = this.props.eventId

 // console.log(elem.eventsObj);
    return (
      <div className="event4rsvp">
        <span>
          <img className="userLoggedInPic" src={elem.picUrl} />
        </span>
        <span>
          {elem.username}
        </span>
      </div>
    )
  }
}
export default Event4UserRSVP;
