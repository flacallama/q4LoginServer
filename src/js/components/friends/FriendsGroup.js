import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';

class FriendsContainer extends Component {
  constructor() {
    super();
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
  // console.log('mapping state to props in loginActive', state.login);
  return {
    login: state.login
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     loginAction: bindActionCreators(login, dispatch),
//   }
// }
export default connect(mapStateToProps, null)(FriendsContainer);
