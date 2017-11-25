import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectEvent } from '../../actions/eventCreation';
import { getEvent } from '../../actions/getEvent';
import { putEventStatusInvited } from '../../actions/getEvent';
import { Link } from 'react-router-dom';




class Event2Event extends Component {
  constructor() {
    super();
  }
  render () {
    let handleClick = () => {
      // this.props.selectEvent(this.props.event.id);
      this.props.selectEventAction(this.props.event.id)

      this.props.putEventStatusInvitedAction(this.props.event.id)
    }

      return (
        <Link to={'/event/create/2'}>
          <div onClick={handleClick} className={this.props.event.id == this.props.eventCreation.eventId ? "selectedEvent" : "unSelectedEvent"}>

            {this.props.event.title}

          </div>
        </Link>
      )






  }
}


function mapStateToProps(state, props){
  return {
    eventCreation: state.eventCreation,
    getEvent: state.getEvent
  }
}

function matchDispatchToProps(dispatch){
  return {
    selectEventAction: bindActionCreators(selectEvent, dispatch),
    getEventAction: bindActionCreators(getEvent, dispatch),
    putEventStatusInvitedAction: bindActionCreators(putEventStatusInvited, dispatch)
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Event2Event);
