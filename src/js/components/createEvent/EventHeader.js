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
            create the event
          </Link>
          <Link to='/event/create/2' className="eventHeaderButton">
            tell your friends
          </Link>
          <Link to='/event/create/3' className="eventHeaderButton">
            decide on a date
          </Link>
          <Link to='/event/create/4' className="eventHeaderButton">
            view the response
          </Link>

        </div>
      </div>
    )
  }
}
export default EventHeader;
