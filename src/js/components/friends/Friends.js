import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Friend from './Friend';
import { friendsArrState } from '../../actions/getFriends';
import { getFriend } from '../../actions/getFriends';

class Friends extends Component {
  constructor() {
    super();
  }

  componentWillMount(){
    this.props.getFriendAction(this.props.login.userData.id)
    // this.props.friendsReqArrStateAction(this.props.login.userData.friendRequestsArr);
    // console.log('friends: GET', this.props.login.userData.friends);
    // if(this.props.getFriends.friendsArr.length >= this.props.login.userData.friends.length){
    //   this.props.friendsArrStateAction(this.props.getFriends.friendsArr);
    // }
    // this.props.friendsArrStateAction(this.props.login.userData.friends);
    // console.log('friends: login vs getFriends at didMount', this.props.login.userData.friends, this.props.getFriends.friendsArr);
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
    // // console.log('friends: login.props', this.props.login);
    if(this.props.getFriends.friend){
    console.log('friends: getFriends.friend', this.props.getFriends.friend.friends,   this.props.getFriends.friend.friendRequestsArr);
  }
    let usersFriends = null;
    if(this.props.getFriends.friend){
      // console.log('inside Friends if',this.props.getFriends.friendsArr);
      let friendsList = this.props.getFriends.friend.friends
    //   // console.log('friendsList1', friendsList);
    //   // if(this.props.getFriends.friend){
    //
    // // }
    //   // console.log('user', this.props.getFriends.user);
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

    if(this.props.getFriends.friend){
      // if(-1 > 0){
      return (
        <div className="friendsContainer ">{usersFriends}</div>
      )

    } else {
      return <div>Not updated on Friends component</div>
    }
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
    getFriendAction: bindActionCreators(getFriend, dispatch)
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(Friends);










// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import Friend from './Friend';
// import { friendsArrState } from '../../actions/getFriends';
// import { getFriend } from '../../actions/getFriends';
//
// class Friends extends Component {
//   constructor() {
//     super();
//   }
//
//   componentDidMount(){
//     this.props.getFriendAction(this.props.login.userData.id)
//     // this.props.friendsReqArrStateAction(this.props.login.userData.friendRequestsArr);
//     // console.log('friends: GET', this.props.login.userData.friends);
//     if(this.props.getFriends.friendsArr.length >= this.props.login.userData.friends.length){
//       this.props.friendsArrStateAction(this.props.getFriends.friendsArr);
//     }
//     this.props.friendsArrStateAction(this.props.login.userData.friends);
//     // console.log('friends: login vs getFriends at didMount', this.props.login.userData.friends, this.props.getFriends.friendsArr);
//   }
//
//   // componentDidReceiveProps(nextProps){
//   //   if(nextProps.getFriends != this.props.getFriends){
//   //     console.log(propschange - getFriends, nextProps.getFriends, this.props.getFriends);
//   //   }
//   //   if(nextProps.login != this.props.login){
//   //     console.log(propschange - login, nextProps.login, this.props.login);
//   //   }
//   // }
//
//   render () {
//     // console.log('friends: login.props', this.props.login);
//     console.log('friends: getFriends.friend', this.props.getFriends.friend.friends,   this.props.getFriends.friend.friendRequestsArr);
//     let usersFriends = null;
//     if(this.props.getFriends.friendsArr.length != 0 && this.props.getFriends.user){
//       // console.log('inside Friends if',this.props.getFriends.friendsArr);
//       let friendsList = this.props.getFriends.friendsArr
//       // console.log('friendsList1', friendsList);
//       // if(this.props.getFriends.friend){
//
//     // }
//       // console.log('user', this.props.getFriends.user);
//       usersFriends = this.props.getFriends.user
//       .filter((elem, i) => {
//         if (friendsList.includes(parseInt(elem.id))){
//           return elem
//         }
//       })
//       .map(elem => {
//         // return <FriendInfo elem={elem} />
//         return <Friend key={elem.id} elem={elem} />
//       })
//     }
//
//     if(this.props.getFriends.friendsArr.length > 0){
//       return (
//         <div className="friendsContainer ">{usersFriends}</div>
//       )
//
//     } else {
//       return <div>Not updated on Friends component</div>
//     }
//   }
// }
//
// function mapStateToProps(state, props){
//   return {
//     getFriends: state.getFriends
//   }
// }
//
// function matchDispatchToProps(dispatch){
//   return {
//     // getFriendsAction: bindActionCreators(getFriends, dispatch),
//     friendsArrStateAction: bindActionCreators(friendsArrState, dispatch),
//     getFriendAction: bindActionCreators(getFriend, dispatch)
//   }
// }
// export default connect(mapStateToProps, matchDispatchToProps)(Friends);
