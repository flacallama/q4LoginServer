import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { putDate } from '../../actions/getFriends';
// import { getFriend } from '../../actions/getFriends';

class DateBox extends Component {

  state = {
    theEvent: null,
    updated: false
  }


  componentWillMount(){
    let eventId = parseInt(this.props.id);
    console.log('eventId', eventId);

    axios.get(`http://localhost:1337/events/${eventId}`)
      .then(res => {
        const theEvent = res.data;
        this.setState({
          theEvent: theEvent,
          updated: true
        });
      });
  }

  // componentWillReceiveProps(nextProps){
  //   // if(nextProps.getFriend != this.props.getFriend){
  //   //   this.setState({
  //   //     updated: true
  //   //   })
  //   //
  //   // }
  //
  // }


// console.log("elem DateBoxEvent", this.props.)

  render () {
    let pathid = "/events/" + this.props.id

    return (
      <Link to={pathid}>
        <div>
          {this.state.updated ? this.state.theEvent.title : "notupdated"}
        </div>
      </Link>

    )
  }
}

function mapStateToProps(state, props){
  return {
    // login: state.login,
    // putDate: state.putDate
  }
}

function matchDispatchToProps(dispatch){
  return {
    // putDateAction: bindActionCreators(putDate, dispatch)

  }
}

export default connect(null, null)(DateBox);
