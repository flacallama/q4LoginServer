import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PendingRequestAPI from './PendingRequestAPI';


class PendingRequests extends Component {
  constructor() {
    super();
  }


  render () {


    if(this.props.login.userData){
      var friendsArr = this.props.login.userData.friends
      let friendRequests = friendsArr.map(friendId => {
        <PendingRequestAPI friendId={friendId} key={friendId} />
      })


      console.log('login', friendsArr);
    }

    return (
      <div>
        <h5>Pending requests</h5>

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
//     loginAction: bindActionCreators(login, dispatch),
//   }
// }

export default connect(mapStateToProps, null)(PendingRequests);
