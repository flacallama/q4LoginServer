import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putFriendRequestArray } from '../../actions/getFriends';
import { putFriendsArray } from '../../actions/getFriends';
import { friendsReqArrState } from '../../actions/getFriends';
// import { getFriends } from '../../actions/getFriends';
// import { refresh } from '../../actions/login';
import { friendsArrState } from '../../actions/getFriends';

class PendingRequestAPI extends Component {
  constructor() {
    super();
    this.state = {
      accepted: null
    }

  }



  acceptFriend = () => {
    let userId = this.props.userId
    let userFriendRequests = this.props.friendsReqArr;
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


    // the request is not disappearing on PendingRequests.
    // Therefore, let's alter the store to trigger a rerender.
    // First we get the orginal request array, then we take
    // out this user's id, and then put it back.
    // console.log('this gets sent to state: ', newUserFriendRequests);
    this.props.friendsReqArrStateAction(newUserFriendRequests)

    // trying to refresh the friends list to include the
    // newest accepted friend
    // this.props.refreshAction(userId)





    // update friend's friend array to include
    // the userId
    let newFriendFriends = friendFriends.concat(userId)
    this.props.putFriendsArrayAction(newFriendFriends, friendId)

    // update user's friend array to include accepted request
    let origUsersFriendArr = this.props.login.userData.friends
    let newUsersFriendArr = origUsersFriendArr.concat(friendId)
    this.props.putFriendsArrayAction(newUsersFriendArr, userId)
    // we must do this with the store object also so that 
    // it refreshes on the index page
    this.props.friendsArrStateAction(newUsersFriendArr)




    this.setState({
      accepted : true
    })
  }


  render () {
    console.log('login props', this.props.login);
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
        <div>
          {this.state.accepted ? 'request accepted' : <button onClick={this.acceptFriend}>Accept Request</button>}
        </div>
      </div>
    )

  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    getFriends: state.getFriends
  }
}

function matchDispatchToProps(dispatch){
  return {
    putFriendRequestArrayAction: bindActionCreators(putFriendRequestArray, dispatch),
    putFriendsArrayAction: bindActionCreators(putFriendsArray, dispatch),
    friendsReqArrStateAction: bindActionCreators(friendsReqArrState, dispatch),
    // refreshAction: bindActionCreators(refresh, dispatch)
    friendsArrStateAction: bindActionCreators(friendsArrState, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(PendingRequestAPI);
