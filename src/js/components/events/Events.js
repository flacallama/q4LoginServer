import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../../actions/getEvents';
import Event from './Event';
// import Friend from './Friend';




class Events extends Component {
  constructor() {
    super();
    this.state = {
      updated: false
    }
  }

  componentDidMount(){
    this.props.getEventsAction()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getEvents != this.props.getEvents){
      // console.log('nextprops hit;', nextProps)
      if(nextProps.getEvents){
        // console.log('elem hit;')
        this.setState({ updated: true })
      }
    }
  }


  render () {
    var userId = this.props.login.userData.id

    let theevents = null;

    if(this.state.updated){
      theevents = this.props.getEvents
      .filter(elem => {
        if(elem.invitees.includes(userId)){
          return elem
        }
      })
      .map(elem => {
        return <Event key={elem.id} elem={elem} />
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
