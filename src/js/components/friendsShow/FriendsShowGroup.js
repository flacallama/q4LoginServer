import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriend } from '../../actions/getFriends';
import Friend from './Friend';

// { match: {params: { id } } }

class FriendsShowGroup extends Component {

  componentDidMount(){
    this.props.getFriendAction(this.props.myId)
  }


render() {
  console.log('getFriends FriendsShowGroup', this.props.getFriends);
  return (
    <div>
      <Friend
        getFriend={this.props.getFriends}
        myId={this.props.myId}
        login={this.props.login}
        />

    </div>

  )

}
}

function mapStateToProps(state, props){
  // console.log('mapping state to props in loginActive', state.login);
  return {
    getFriends: state.getFriends
  }
}

function matchDispatchToProps(dispatch){
  return {
    getFriendAction: bindActionCreators(getFriend, dispatch),
  }
}


export default connect(mapStateToProps, matchDispatchToProps)(FriendsShowGroup);
