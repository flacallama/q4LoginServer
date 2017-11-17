import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FriendsShowGroup from '../friendsShow/FriendsShowGroup';

class FriendsShow extends Component {
  constructor() {
    super();
  }



  render () {
    if (!this.props.login.loggedIn) {
      console.log("got booted in friendsshow for not logged in");
      // UNCOMMENT FOR SECURITY!!!
      // return (
      //   // <Redirect to={ '/login'}/>
      // )
    }

  const myId = parseInt(this.props.match.params.id, 10);

  if(myId !== 0 && !myId){
    return <Redirect to={{ pathname: "/404"}} />;
  }

    return (
      <div>{myId}
        <FriendsShowGroup myId={myId}/>
        
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     loginAction: bindActionCreators(login, dispatch),
//   }
// }

export default connect(mapStateToProps, null)(FriendsShow);
