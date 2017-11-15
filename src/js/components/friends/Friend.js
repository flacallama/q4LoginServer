import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FriendInfo from './FriendInfo';
import { getFriends } from '../../actions/getFriends';


class Friend extends Component {
  constructor() {
    super();
    this.state ={
      user: null
    }
  }

  componentDidMount(){
    this.props.getFriendsAction()

  }

  // mountUp = () => {
  //   this.setState({
  //     friend: this.props.getFriends
  //   })
  // }


  render () {

    let thefriend = null;
    console.log("getfriends", this.props.getFriends)
    console.log("getstateuser", this.state.friend)
    if(this.props.getFriends){
      thefriend = this.props.getFriends
      .filter((elem, i) => {
        if (elem.id == this.props.friend){
          // return elem.username
          console.log("in", elem.id, this.props.friend)
          return elem.id
        } else {
          console.log("out", elem.id == this.props.friend)
        }
      })
      // .map(elem => {
      //   return elem
      // })
      console.log(thefriend[0], "thefriend[0] from friend")
    }

    return (
      <div className="friendBox">
        {this.props.friend}
        {thefriend == null ? "null" : <FriendInfo friend={thefriend} />}
      </div>
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
    getFriendsAction: bindActionCreators(getFriends, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Friend);
