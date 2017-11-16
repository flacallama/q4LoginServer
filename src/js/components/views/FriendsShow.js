import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class FriendsShow extends Component {
  constructor() {
    super();
  }



  render () {
    if (!this.props.login.loggedIn) {
      return (
        <Redirect to={ '/login'}/>
      )
    }

  const myId = parseInt(this.props.match.params.id, 10);

  if(myId !== 0 && !myId){
    return <Redirect to={{ pathname: "/404"}} />;
  }

    return (
      <div>{myId}</div>
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
