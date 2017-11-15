import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';

class FriendsContainer extends Component {
  constructor() {
    super();
  }
  render () {

    console.log(this.props.login.userData);
    return (
      <div>
        {this.props.login.userData.friends ? <Friends login={this.props.login} /> : ''}
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
