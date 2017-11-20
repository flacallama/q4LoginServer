import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import EventShow1 from '../events/EventShow1';
import { bindActionCreators } from 'redux';
import { getEvent } from '../../actions/getEvent';


class EventShow extends Component {
  constructor() {
    super();
    this.state = {
      updated: false
    }
  }

  componentDidMount(){
    this.props.getEventAction(parseInt(this.props.match.params.id))
  }


  render () {

    if (!this.props.login.loggedIn) {
      return (
        <Redirect to={ '/login'}/>
      )
    }
    let getEvent = this.props.getEvent

    return (
    <ul>
      {getEvent ? <EventShow1 elem={this.props.getEvent} />: "no event yet in eventShow"}
    </ul>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    getEvent: state.getEvent
  }
}

function matchDispatchToProps(dispatch){
  return {
    getEventAction: bindActionCreators(getEvent, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(EventShow);
