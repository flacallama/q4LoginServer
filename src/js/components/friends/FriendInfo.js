import React, { Component } from 'react';
import FriendDetails from './FriendDetails';

class FriendInfo extends Component {
  constructor() {
    super();
    this.state = {
      updated: false
    }

  }


  componentWillReceiveProps(nextProps) {
    if (nextProps != this.props){
      // console.log('nextprops hit;')
      if(nextProps.elem){
        // console.log('elem hit;')
        this.setState({ updated: true })
      }
    }
  }
  render () {
    let elem = this.props.elem[0];
    // console.log(elem)
    // let picUrl = this.props.picUrl;
    // let id = this.props.id;
    //
    // console.log("friendinfo props: ", this.props.friend);
    //
    // console.log("friendinfo state: ", this.state.friend);
    // {friend.length === 1 ? 'novalue' : console.log('inside return', friend[0])}
    //

    return (
      <div class="">
          {!this.state.updated ? "noelem" : <FriendDetails elem={elem} />}
      </div>
      // <div>{this.state.friend == null ? 'notusername' :  this.state.friend[0].username}</div>
    )
  }
}
export default FriendInfo;
