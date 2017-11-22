import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Friends from './Friends';
import { getFriends } from '../../../actions/getFriends';

class FriendsGroup extends Component {
  constructor() {
    super();
  }

  componentWillMount(){
    this.props.getFriendsAction()
  }

  render () {
    console.log('getFriend friendsGroup', this.props.getFriend);
    // console.log('friendsGroup login', this.props.login);

    // console.log(this.props.login.userData);
    // <h2 id="title">Friends List</h2>
    // {this.props.login.userData.friends ? <Friends login={this.props.login} /> : 'friendsgrouprenderfail'}
    return (
      <div className="container" id="friendsOuterContainer">
        FriendGroup
      </div>
    )
  }
}
function mapStateToProps(state, props){
  return {
    login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    getFriendsAction: bindActionCreators(getFriends, dispatch),
  }
}
export default connect(mapStateToProps, matchDispatchToProps)(FriendsGroup);