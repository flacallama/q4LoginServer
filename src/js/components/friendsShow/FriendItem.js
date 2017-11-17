import React, { Component } from 'react';
class FriendItem extends Component {
  constructor() {
    super();
  }
  render () {

    let getFriend = this.props.getFriend

    return (
      <div>
        <h2>{getFriend.friend[0].username}</h2>
        <img src={getFriend.friend[0].picUrl}/>
      </div>
    )
  }
}
export default FriendItem;
