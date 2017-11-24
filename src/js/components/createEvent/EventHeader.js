import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventHeader extends Component {
  constructor() {
    super();
  }
  render () {
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
  }
}
export default EventHeader;
