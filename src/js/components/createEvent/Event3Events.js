import React, { Component } from 'react';
class Event3Events extends Component {
  constructor() {
    super();
  }
  render () {

    let theinvitees = this.props.elem[1].map((person, i)=> <span key={i}> {i + 1}: {person}</span>)

    return (
      <div>
        <span>{this.props.elem[0]} :  </span> {theinvitees}

      </div>
    )
  }
}
export default Event3Events;
