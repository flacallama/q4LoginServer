import React, { Component } from 'react';
class FriendDetail extends Component {
  constructor() {
    super();
  }
  render () {
    return (
      <div>
        <div className="friendNameBox">
          <h6>{this.props.elem.username}</h6>
        </div>

        <div className="friendImageBox">
          <img src={this.props.elem.picUrl} className="friendImageImg"/>
        </div>
      </div>
    )
  }
}
export default FriendDetail;
