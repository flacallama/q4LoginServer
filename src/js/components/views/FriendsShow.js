import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FriendsShowGroup from '../friendsShow/FriendsShowGroup';
import { bindActionCreators } from 'redux';
import { getFriend } from '../../actions/getFriends';

class FriendsShow extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    }
  }

  componentDidMount(){
    this.props.getFriendAction(parseInt(this.props.match.params.id, 10))
  }


  componentWillReceiveProps(nextProps){
    if(nextProps.match.params != this.props.match.params){
      // console.log('params are changingin friendShow');

      // IF I PUT THIS OUTSIDE IF, IT UPDATES CONTINUALLY BUT WILL WORK FOR CLICKING ON NEW FRIENDS

      this.props.getFriendAction(parseInt(this.props.match.params.id, 10))
    }
    if(nextProps != this.props){
      this.setState({
        loaded: true
      })
    }
  }



  render () {
    if (!this.props.login.loggedIn) {
      // console.log("got booted in friendsshow for not logged in");
      return (
        <Redirect to={ '/login'}/>
      )
    }

  const myId = parseInt(this.props.match.params.id, 10);


  if(myId !== 0 && !myId){
    return <Redirect to={{ pathname: "/404"}} />;
  }

    if(this.state.loaded){

      return (
        <div>
          {this.props.getFriends ? <FriendsShowGroup myId={myId} login={this.props.login} getFriend={this.props.getFriends}/> : "friendShow"}

        </div>
      )
    } else {
      return <div>loading...</div>
    }
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    getFriends: state.getFriends
  }
}

function matchDispatchToProps(dispatch){
  return {
    getFriendAction: bindActionCreators(getFriend, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(FriendsShow);
