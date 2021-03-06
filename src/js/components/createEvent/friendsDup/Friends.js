import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Friend from './Friend';



class Friends extends Component {
  constructor() {
    super();
  }

  render () {
    // friendsList is the friendId array from user json
    let friendsList = this.props.login.userData.friends


    let usersFriends = null;
    if(this.props.getFriends.user){
      usersFriends = this.props.getFriends.user
      .filter((elem, i) => {
        if (friendsList.includes(parseInt(elem.id))){
          return elem
        }
      })
      .map(elem => {
        return <Friend key={elem.id} elem={elem} fetchedEvents={this.props.fetchedEvents} selectedEvent={this.props.selectedEvent}/>
      })
    }

    return (
      <div className="friendsContainer">{usersFriends}</div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    getFriends: state.getFriends
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     getFriendsAction: bindActionCreators(getFriends, dispatch),
//   }
// }
export default connect(mapStateToProps, null)(Friends);
