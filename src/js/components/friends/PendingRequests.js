import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PendingRequestAPI from './PendingRequestAPI';
import { getFriend } from '../../actions/getFriends';



class PendingRequests extends Component {
  constructor() {
    super();
    this.state = {
      update: false
    }
  }



  render () {


    let friendRequests = null;

    if(this.props.getFriends.friend){
      console.log('PendingRequests: getFriends.friend', this.props.getFriends.friend.friends,   this.props.getFriends.friend.friendRequestsArr);

      var friendsReqArr = this.props.getFriends.friend.friendRequestsArr


      friendRequests = friendsReqArr.map(friendId => {
        return <PendingRequestAPI friendId={friendId} key={friendId} userId={this.props.userId} friendsReqArr={friendsReqArr}/>
      })
    }

    if (this.props.getFriends.friend) {

      return (
        <div className="container col-md-12" id="friendsOuterContainer">
          {this.props.getFriends.friend.friendRequestsArr.length > 0 ? <h4 id="title">Pending Requests</h4> : ''}

          {friendRequests ? friendRequests : 'you have no friend requests'}

        </div>
      )
    } else {
      return <div>You have no new friend requests</div>
    }
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
    getFriendAction: bindActionCreators(getFriend, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(PendingRequests);











// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import PendingRequestAPI from './PendingRequestAPI';
// import { friendsReqArrState } from '../../actions/getFriends';
// // import { friendsArrState } from '../../actions/getFriends';
// // import { refresh } from '../../actions/login';
//
//
//
//
// class PendingRequests extends Component {
//   constructor() {
//     super();
//     this.state = {
//       update: false
//     }
//   }
//
//   componentDidMount(){
//
//     this.props.friendsReqArrStateAction(this.props.login.userData.friendRequestsArr);
//     // this.props.refreshAction(this.props.login.userData.id)
//
//   }
//
//
//   render () {
//     // console.log('PendingRequests friendsArr: Login/getFriends/Arr', this.props.login.userData.friends, this.props.getFriends.friendsArr);
//     //
//     // console.log('PendingRequests friendsReqArr: Login/getFriends/Arr', this.props.login.userData.friendRequestArr, this.props.getFriends.friendsReqArr)
//     //
//     // console.log('getFriends.loggedInUser', this.props.getFriends.loggedInUser);
//
//     console.log('PendingRequests: getFriends.friend', this.props.getFriends.friend.friends,   this.props.getFriends.friend.friendRequestsArr);
//
//     let friendRequests = null;
//
//     if(this.props.getFriends.friendsReqArr){
//
//       var friendsReqArr = this.props.getFriends.friendsReqArr
//
//
//       friendRequests = friendsReqArr.map(friendId => {
//         // console.log('friendId', friendId);
//         return <PendingRequestAPI friendId={friendId} key={friendId} userId={this.props.userId} friendsReqArr={friendsReqArr}/>
//       })
//       // console.log('', friendsReqArr);
//     }
//     // console.log('friendsReqArr',  this.props.getFriends.friendsReqArr );
//     if (this.props.getFriends.friendsReqArr.length != 0) {
//
//       return (
//         <div className="container col-md-12" id="friendsOuterContainer">
//           <h4 id="title">Pending Requests</h4>
//
//           {friendRequests ? friendRequests : 'you have no friend requests'}
//
//         </div>
//       )
//     } else {
//       return <div>You have no new friend requests</div>
//     }
//   }
// }
//
//
// function mapStateToProps(state, props){
//   return {
//     login: state.login,
//     getFriends: state.getFriends,
//     loggedInUser: state.loggedInUser
//   }
// }
//
// function matchDispatchToProps(dispatch){
//   return {
//     friendsReqArrStateAction: bindActionCreators(friendsReqArrState, dispatch),
//     // friendsArrStateAction: bindActionCreators(friendsArrState, dispatch),
//     // refreshAction: bindActionCreators(refresh, dispatch),
//     // getLoggedInUserAction: bindActionCreators(getLoggedInUser, dispatch)
//   }
// }
//
// export default connect(mapStateToProps, matchDispatchToProps)(PendingRequests);
