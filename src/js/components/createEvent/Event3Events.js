import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { putEventStatus } from '../../actions/getEvent';


class Event3Events extends Component {
  constructor() {
    super();
    this.state = {
      dateClicked: false
    }
  }

  inviteTheUsers = () => {
    for(let user in this.props.invitedUsers){
      // isolate this users eventObj
      let usersEventObj = this.props.invitedUsers[user].eventObj;

      // add the new value
      usersEventObj[this.props.eventCreation.eventId] = this.props.elem[0];

      // put it
      axios.put(`http://localhost:1337/users/${this.props.invitedUsers[user].id}`,
      {
        "eventObj": usersEventObj
      })
        .then(res => {
          const postPutUser = res.data;
          // console.log('postPutUser', postPutUser);
        });
    }
    this.setState({
      dateClicked: true
    })
    this.props.putEventStatusAction(this.props.eventCreation.eventId, "scheduled")
  }




  render () {
    if(this.state.dateClicked){
      return (
        <Redirect to={ '/event/create/4'}/>
      )
    }
    // shit we don't have a userId for the PUT request.
    // lets loop thru the users to find it.
    let invitedUsersIdArr = [];
    // an array of the invited userObjects
    let invitedUsers = this.props.invitedUsers;
    for(let user in invitedUsers){
      // console.log(allUsers[user].username);
      invitedUsersIdArr.push(invitedUsers[user].id)
    }
    // console.log('invitedUsersIdArr', invitedUsersIdArr);



    // render out all of the invitees names; they're
    // in an array at element [1]
    let theinvitees = this.props.elem[1].map((person, i)=>{
       return <span key={i}> {i + 1}: {person}</span>
    })

    return (
      <div>
        <span onClick={this.inviteTheUsers}>{this.props.elem[0]} :  </span> {theinvitees}

      </div>
    )
  }
}



function mapStateToProps(state, props){
  return {
    eventCreation: state.eventCreation
  }
}

function matchDispatchToProps(dispatch){
  return {
    putEventStatusAction: bindActionCreators(putEventStatus, dispatch)  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Event3Events);
