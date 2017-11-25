import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PendingRequestAPI from './PendingRequestAPI';
import { friendsReqArrState } from '../../actions/getFriends';
// import { friendsArrState } from '../../actions/getFriends';


class PendingRequests extends Component {
  constructor() {
    super();
    this.state = {
      update: false
    }
  }

  componentDidMount(){
    this.props.friendsReqArrStateAction(this.props.login.userData.friendRequestsArr);
    // this.props.friendsArrStateAction(this.props.login.userData.friends);
  }


  render () {
    // console.log('login req array', this.props.login.userData);
    let friendRequests = null;

    if(this.props.getFriends.friendsReqArr){

      var friendsReqArr = this.props.getFriends.friendsReqArr


      friendRequests = friendsReqArr.map(friendId => {
        // console.log('friendId', friendId);
        return <PendingRequestAPI friendId={friendId} key={friendId} userId={this.props.userId} friendsReqArr={friendsReqArr}/>
      })
      // console.log('', friendsReqArr);
    }
    console.log('friendsReqArr',  this.props.getFriends.friendsReqArr );
    if (this.props.getFriends.friendsReqArr.length != 0) {

      return (
        <div className="container col-md-12" id="friendsOuterContainer">
          <h4 id="title">Pending Requests</h4>

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
    friendsReqArrStateAction: bindActionCreators(friendsReqArrState, dispatch),
    // friendsArrStateAction: bindActionCreators(friendsArrState, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(PendingRequests);
