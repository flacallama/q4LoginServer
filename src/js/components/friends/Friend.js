import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FriendInfo from './FriendInfo';
import { getFriends } from '../../actions/getFriends';


class Friend extends Component {
  constructor() {
    super();
  }

  state = {
    friend: null
  }
  componentDidMount(){
    this.props.getFriendsAction()
  }



  componentWillUpdate(nextProps, nextState){
    if (nextProps.friend != this.state.friend){
      this.update()
    }
  }
  update = () => {
    this.setState({
      friend: this.props.friend
    })
  }




  // mountUp = () => {
  //   this.setState({
  //     friend: this.props.getFriends
  //   })
  // }


  render () {

    let thefriend = null;
    // console.log("getfriends friend:", this.props.getFriends.user)
    // console.log("getstateuser ", this.state.friend, this.props.friend)
    if(this.props.getFriends.user){
      thefriend = this.props.getFriends.user
      .filter((elem, i) => {
        // console.log('elem: ', elem);
        if (parseInt(elem.id) == parseInt(this.state.friend)){
          // return elem.username
          // console.log("in", elem.id, elem.username, elem.picUrl)
          // return elem.username
          return elem
        } else {
          // console.log("out", elem.id, this.state.friend)
        }
      })
      // .map(elem => {
      //   return elem
      // })
      // console.log(thefriend[0], "thefriend[0] from friend")
    }
// <FriendInfo friend={thefriend} />

    // let friendPic = () =>{
    // console.log('friendPic funct: ', thefriend[0].username);
    //   <h6>{thefriend[0].username}</h6>
    // }

    return (
      <div className="friendBox" >
        {!(thefriend) ? 'friend rendermethod problem' : <FriendInfo elem={thefriend}/>}


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
