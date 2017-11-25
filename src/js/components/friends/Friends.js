import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Friend from './Friend';
import { friendsArrState } from '../../actions/getFriends';


class Friends extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    // this.props.friendsReqArrStateAction(this.props.login.userData.friendRequestsArr);
    console.log('friends: GET', this.props.login.userData.friends);
    this.props.friendsArrStateAction(this.props.login.userData.friends);
  }

  // componentDidReceiveProps(nextProps){
  //   if(nextProps.getFriends != this.props.getFriends){
  //     console.log(propschange - getFriends, nextProps.getFriends, this.props.getFriends);
  //   }
  //   if(nextProps.login != this.props.login){
  //     console.log(propschange - login, nextProps.login, this.props.login);
  //   }
  // }

  render () {
    console.log('friends: login.props', this.props.login);
    console.log('friends: getFriends', this.props.getFriends);
    let usersFriends = null;
    if(this.props.getFriends.friendsArr.length != 0){
      console.log('inside Friends if');
      let friendsList = this.props.getFriends.friendsArr
      console.log('friendsList', friendsList);
      usersFriends = this.props.getFriends.user
      .filter((elem, i) => {
        if (friendsList.includes(parseInt(elem.id))){
          return elem
        }
      })
      .map(elem => {
        // return <FriendInfo elem={elem} />
        return <Friend key={elem.id} elem={elem} />
      })
    }

    return (
      <div className="friendsContainer ">{usersFriends}</div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    getFriends: state.getFriends
  }
}

function matchDispatchToProps(dispatch){
  return {
    // getFriendsAction: bindActionCreators(getFriends, dispatch),
    friendsArrStateAction: bindActionCreators(friendsArrState, dispatch),
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(Friends);
