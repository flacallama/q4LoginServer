import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventShow2 extends Component {
  constructor() {
    super();
  }
  render () {

    let pathid = "/friends/" + this.props.elem.id
    return (
      <Link to={pathid}>
        <div className="friendBox" >
          <div className="friendNameBox">
            <h3>{this.props.elem.username}</h3>
            <p>{this.props.status}</p>
          </div>

          <div className="friendImageBox">
            <img src={this.props.elem.picUrl} className="friendImageImg"/>
          </div>
        </div>
      </Link>
    )
  }
}
export default EventShow2;
