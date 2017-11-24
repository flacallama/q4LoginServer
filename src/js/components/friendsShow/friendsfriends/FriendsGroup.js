import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import Friend from './Friend';

class FriendsGroup extends Component {
  constructor() {
    super();
  }



  render () {


    let selectedFriendArr = this.props.getFriend.friend.friends

    let thefriends = selectedFriendArr.map(friend => {
      return <Friend key={friend} friend={friend} />

    })

    return (
      <div className="container" id="friendsOuterContainer">
        FriendGroup
        {thefriends}
      </div>
    )
  }
}
function mapStateToProps(state, props){
  return {
    login: state.login
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     getFriendsAction: bindActionCreators(getFriends, dispatch),
//   }
// }
export default connect(mapStateToProps, null)(FriendsGroup);
