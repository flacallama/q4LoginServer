import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriend } from '../../actions/getFriends';
import Friend from './Friend';

// { match: {params: { id } } }

class FriendsShowGroup extends Component {

  componentDidMount(){
    console.log('myid', this.props.myId);
    this.props.getFriendAction(this.props.myId)
  }


render() {

  // const myId = parseInt(this.props.myId);
  //
  //
  // if(myId !== 0 && !myId){
  //   return <Redirect to={{ pathname: "/404"}} />;
  // }
  //
  //
  // console.log(this.props.getFriends.friend, "friends detailsgroup")



  return (
    <div>
      <Friend
        getFriend={this.props.getFriends}
        myId={this.props.myId}
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
