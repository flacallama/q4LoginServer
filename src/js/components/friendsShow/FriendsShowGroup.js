import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriend } from '../../actions/getFriends';
import Friend from './Friend';

// { match: {params: { id } } }

class FriendsShowGroup extends Component {
  constructor() {
    super();
    this.state = {
      getFriend: null
    }
  }

  componentDidMount(){
    this.props.getFriendAction(this.props.myId)
  }

  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps', nextProps.getFriend, this.props.getFriend);
    if(nextProps.getFriend != this.props.getFriend){
      this.setState({
        getFriend: nextProps.getFriend
      })
    }
  }

render() {
  console.log('getFriends FriendsShowGroup props', this.props.getFriend);
  console.log('getFriends FriendsShowGroup state', this.state.getFriend);

  if(!this.state.getFriend){
    return <div>no friend</div>
  }

  return (
    <div>
      <Friend
        getFriend={this.state.getFriend}
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
    getFriend: state.getFriends
  }
}

function matchDispatchToProps(dispatch){
  return {
    getFriendAction: bindActionCreators(getFriend, dispatch),
  }
}


export default connect(mapStateToProps, matchDispatchToProps)(FriendsShowGroup);
