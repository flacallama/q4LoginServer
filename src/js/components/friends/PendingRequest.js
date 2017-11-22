import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putFriendRequestArray } from '../../actions/getFriends';
import { putFriendsArray } from '../../actions/getFriends';

class PendingRequestAPI extends Component {
  constructor() {
    super();
    this.state = {
      accepted: null
    }

  }



  acceptFriend = () => {

    let userId = this.props.userId
    let userFriendRequests = this.props.friendRequests;
    let friendId = this.props.theFriend.id;
    let friendFriends = this.props.theFriend.friends;
    // console.log(userId, userFriendRequests, friendId, friendFriends);

    // make a new array of friend requests without the // accepted request
    let newUserFriendRequests = userFriendRequests.filter(elem => {
      if(elem != friendId){
        return elem
      }
    })
    this.props.putFriendRequestArrayAction(newUserFriendRequests, userId)

    // update friends friend array to include
    // the userId
    let newFriendFriends = friendFriends.concat(userId)
    this.props.putFriendsArrayAction(newFriendFriends, friendId)
    this.setState({
      accepted : true
    })
  }


  render () {
    // console.log('PendingRequest', this.props.theFriend);

    let pathid = "/friends/" + this.props.theFriend.id

    return (
      <div>
        <Link to={pathid} className="link friendBox">

          <div className="friendNameBox">
            {this.props.theFriend.username}
          </div>

          <div className="friendImageBox">
            <img src={this.props.theFriend.picUrl} className="friendImageImg"/>
          </div>

        </Link>
        {this.state.accepted ? 'request accepted' : <button onClick={this.acceptFriend}>Accept Request</button>}
      </div>
    )

  }
}

// function mapStateToProps(state, props){
//   return {
//     getFriends: state.getFriends
//   }
// }

function matchDispatchToProps(dispatch){
  return {
    putFriendRequestArrayAction: bindActionCreators(putFriendRequestArray, dispatch),
    putFriendsArrayAction: bindActionCreators(putFriendsArray, dispatch)
  }
}

export default connect(null, matchDispatchToProps)(PendingRequestAPI);
