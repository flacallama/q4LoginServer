import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Friends from './Friends';
import { getFriends } from '../../actions/getFriends';

class FriendsGroup extends Component {
  constructor() {
    super();
  }

  componentWillMount(){
    this.props.getFriendsAction()
  }


  render () {

    // console.log(this.props.login.userData);
    return (
      <div id="friendsOuterContainer">
        <h2 id="title">Friends List</h2>
        <div className="friendsContainer">
          <div>
            {this.props.login.userData.friends ? <Friends login={this.props.login} /> : 'friendsgrouprenderfail'}
          </div>
        </div>
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
