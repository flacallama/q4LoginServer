import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../../actions/getEvents';
// import Friend from './Friend';




class EventsGroup extends Component {
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
      console.log('nextprops hit;', nextProps)
      if(nextProps.getEvents){
        // console.log('elem hit;')
        this.setState({ updated: true })
      }
    }
  }


  render () {
    console.log(this.props, "EventsGroup");


    return (
      <div className="eventsGroup">

        {this.state.updated ? this.props.getEvents[0].title : "noevents"}
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    getEvents: state.getEvents
  }
}

function matchDispatchToProps(dispatch){
  return {
    getEventsAction: bindActionCreators(getEvents, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(EventsGroup);
