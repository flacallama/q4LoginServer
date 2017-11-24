import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import EventHeader from '../createEvent/EventHeader'
import { getFriends } from '../../actions/getFriends';

class EventCreate extends Component {
  constructor() {
    super();
  }
  componentWillMount(){
    this.props.getFriendsAction()
  }







  render () {
    if (!this.props.login.loggedIn) {
      return (
        <Redirect to={ '/login'}/>
      )
    }


    // arr = user's friends array of objects
    // friendsArr = an array of their friends user's ids
    function getAvailabilityObject(arr, friendsArr){
      var result = {}
      for (let keys in arr){
        if(friendsArr.includes(arr[keys].id)){
          for (let i = 0; i < arr[keys].dateFreeArr.length; i++ ){
            if(result[arr[keys].dateFreeArr[i]] === undefined){
              result[arr[keys].dateFreeArr[i]] = [arr[keys].username]
            } else {
              result[arr[keys].dateFreeArr[i]] = result[arr[keys].dateFreeArr[i]].concat(arr[keys].username)
            }
          }
        }

      }
      return result
    }

    if(this.props.getFriends){
      // console.log('eventCreate3', this.props.login.userData.dateFreeArr);
      let inviteesObj = this.props.getFriends.user;
      let dateFreeArr = this.props.login.userData.dateFreeArr
      let friendsArray = this.props.login.userData.friends
      let result = getAvailabilityObject(inviteesObj, friendsArray);
      console.log('result', result)

      

    }





    return (
      <div className="container">
        <EventHeader />
        EventCreate3
      </div>
    )
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
    getFriendsAction: bindActionCreators(getFriends, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(EventCreate);
