import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Event extends Component {
  constructor() {
    super();
  }
  render () {
    // console.log("event", this.props.elem)

    let pathid = "/events/" + this.props.elem.id

    return (
      <Link to={pathid}>
        <div className="eventSingle">
          <h3>{this.props.elem.title}</h3>
          <p>{this.props.elem.body}</p>
        </div>
      </Link>
    )
  }
}
export default Event;
