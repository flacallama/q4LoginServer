import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Friend from './Friend';
// import { getFriends } from '../../actions/getFriends';


class Friends extends Component {
  constructor() {
    super();
  }

  // componentWillMount(){
  //   this.props.getFriendsAction()
  // }

  render () {
    // console.log(this.props.login.userData.friends);
    let friends = this.props.login.userData.friends
    let thefriends = friends.map((elem, i)=> {
      return <Friend key={i} friend={elem} />
    })
    return (
      <div>{thefriends}</div>
    )
  }
}

// function mapStateToProps(state, props){
//   // console.log('mapping state to props in loginActive', state.login);
//   return {
//     getFriends: state.getFriends
//   }
// }

// function matchDispatchToProps(dispatch){
//   return {
//     getFriendsAction: bindActionCreators(getFriends, dispatch),
//   }
// }
export default connect(null, null)(Friends);
