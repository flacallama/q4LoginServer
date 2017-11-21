import React, { Component } from 'react';
import FriendItem from './FriendItem'


class Friend extends Component {
  constructor() {
    super();
    this.state = {
      postsLoaded: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getFriend.friend != this.props.getFriend.friend){
      this.setState({
        postsLoaded: true
      })
    }
  }


  render () {
    let getFriend = this.props.getFriend;

    return (
      <div>
        {this.state.postsLoaded ? <FriendItem getFriend={getFriend} login={this.props.login}/> : "no friend recieved"}

      </div>
    )
  }
}
export default Friend;
