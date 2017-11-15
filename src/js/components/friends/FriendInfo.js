import React, { Component } from 'react';
class FriendInfo extends Component {
  // constructor() {
  //   super();
  //
  // }

  state = {
    friend: null
  }

  componentWillUpdate(nextProps, nextState){
    if (nextProps.friend != this.state.friend){
      this.update()
    }
  }
  update = () => {
    this.setState({
      friend: this.props.friend
    })
  }

  render () {
    let friend = this.props.friend;

    console.log("friendinfo props: ", this.props.friend);

    console.log("friendinfo state: ", this.state.friend);
    // {friend.length === 1 ? 'novalue' : console.log('inside return', friend[0])}
    return (
      <div>{this.state.friend == null ? 'notusername' :  this.state.friend[0].username}</div>
    )
  }
}
export default FriendInfo;
