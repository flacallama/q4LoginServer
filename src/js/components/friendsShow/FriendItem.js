import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putFriendRequestArray } from '../../actions/getFriends';
import FriendsGroup from './friendsfriends/FriendsGroup';

class FriendItem extends Component {
  constructor() {
    super();
    this.state = {
      requested: false
    }
  }

  updated = () =>{
    this.setState({
      requested: true
    })
  }

  render () {
    console.log('getFriend FriendItem', this.props.getFriend);
    let getFriend = this.props.getFriend
    let friendId = getFriend.friend[0].id;
    let isFriend = null;

    // having issues with this request being slow
    if(this.props.login.userData.friends){
      // console.log('inside friendItem if');
      var loggedInUsersFriends = this.props.login.userData.friends
      // console.log('login', loggedInUsersFriends);
      isFriend = false;
      if(loggedInUsersFriends.includes(friendId)){
        // console.log('they are a friend');
        isFriend = true;
      }

    }

    // friend request function = invite()
    let invite = () => {
      let friendObj = getFriend.friend[0];
      if(friendObj["friendRequestsArr"]){
        var arr = friendObj["friendRequestsArr"];
      } else {
        arr = []
      }

      let updatedArr = arr.concat(friendObj.id)
      this.props.putFriendRequestArrayAction(updatedArr, friendObj.id)
      this.updated()
    }

    if(!this.props.login.userData){
      return <div>No login data</div>
    }

    return (

      <div>
        <h2>{getFriend.friend[0].username}</h2>
        <div>{isFriend ? "You are friends" : this.state.requested ? "friendship requested" : <button onClick={invite}>add friend</button>}</div>

        <img id="friendShowImage" src={getFriend.friend[0].picUrl}/>
        <FriendsGroup getFriend={getFriend}  />
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    putFriendRequestArrayAction: bindActionCreators(putFriendRequestArray, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(FriendItem);
