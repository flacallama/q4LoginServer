import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriend } from '../../actions/getFriends';
import Friend from './Friend';

// { match: {params: { id } } }

class FriendsDetailsGroup extends Component {

  componentDidMount(){
    this.props.getFriendAction(this.props.match.params.id)
  }


render() {

  const myId = parseInt(this.props.match.params.id, 10);


  if(myId !== 0 && !myId){
    return <Redirect to={{ pathname: "/404"}} />;
  }


  console.log(this.props.getFriends.friend, "friends detailsgroup")



  return (
    <Friend getFriend={this.props.getFriends} />

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


export default connect(mapStateToProps, matchDispatchToProps)(FriendsDetailsGroup);
