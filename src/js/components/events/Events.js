import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../../actions/getEvents';
import EventPre from './EventPre';


class Events extends Component {
  constructor() {
    super();
    this.state = {
      updated: null
    }
  }

  componentDidMount(){
    this.props.getEventsAction()
  }

// THIS WAS USEFUL BEFORE - STATE.UPDATED == NULL (BEFORE)
  componentWillReceiveProps(nextProps) {
    if (nextProps.getEvents != this.props.getEvents){
      console.log('nextprops hit;', nextProps)

      this.setState({ updated: true })
    }
  }


  render () {
    let userId = this.props.login.userData.id
    let theevents = null;

    if(this.state.updated){
      theevents = this.props.getEvents
      .filter(elem => {
        if(Object.keys(elem.invitees).includes(userId.toString())){
          return elem
        }
      })
      .map(el => {
        return <EventPre elem={el} key={el.id} reRender={this.reRender}/>
      })
    }

    return (
      <div className="eventsGroup">
        <h2> Your Events </h2>
        {theevents}
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    getEvents: state.getEvents,
    login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    getEventsAction: bindActionCreators(getEvents, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Events);
