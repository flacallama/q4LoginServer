import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { createEvent } from '../../actions/getEvent';


class Event2Events
 extends Component {
  constructor() {
    super();
  }
  componentWillMount(){
    
  }
  render () {
    // if (!this.props.login.loggedIn) {
    //   return (
    //     <Redirect to={ '/login'}/>
    //   )
    // }

console.log('Event2Events, inviteesObj', this.props.login);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">

          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    createEventAction: bindActionCreators(createEvent, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Event2Events
);
