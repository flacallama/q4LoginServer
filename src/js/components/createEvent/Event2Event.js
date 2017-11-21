import React, { Component } from 'react';
class Event2Event extends Component {
  constructor() {
    super();
  }
  render () {
    let handleClick = () => {
      this.props.selectEvent(this.props.event.id)
    }


    return (
      <div onClick={handleClick} className={this.props.selected ? "selectedEvent" : "unSelectedEvent"}>
        {this.props.event.title}
      </div>
    )
  }
}
export default Event2Event;
