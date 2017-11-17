import React, { Component } from 'react';
class EventShowOne extends Component {
  constructor() {
    super();
  }
  render () {
    return (
      <div>
        <h2>{this.props.elem.title}</h2>
        <p>{this.props.elem.body}</p>
        <img src={this.props.elem.picUrl}/>

      </div>
    )
  }
}
export default EventShowOne;
