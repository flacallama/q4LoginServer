import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PendingRequestAPI from './PendingRequestAPI';


class PendingRequests extends Component {
  constructor() {
    super();
    this.state = {
      update: false
    }
  }

  // componentDidReceiveProps(nextProps){
  //   if(nextProps != this.props){
  //     console.log('componentDidReceiveProps');
  //     this.setState({
  //       update: !this.state.update
  //     })
  //   }
  // }
  // update = () => {
  //   this.setState({
  //     update: true
  //   })
  // }

  render () {

    // if(this.props.login.userData){
    //   this.update()
    // }

    let friendRequests = null;
    if(this.props.login.userData){
      console.log('inside if PendingRequests');
      var friendsArr = this.props.login.userData.friendRequestsArr

      // console.log('friendsArr');
      friendRequests = friendsArr.map(friendId => {
        console.log('friendId', friendId);
        return <li> <PendingRequestAPI friendId={friendId} key={friendId} userId={this.props.userId} friendRequests={friendsArr}/> </li>
      })


      console.log('friendsArr', friendsArr);
    }

    return (
      <div>
        <h5>Pending requests</h5>
        <ul>
        {friendRequests ? friendRequests : 'no friend requests'}
        </ul>
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
