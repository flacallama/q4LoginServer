import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import EventShow1 from '../events/EventShow1';
// import { bindActionCreators } from 'redux';


class EventShow extends Component {
  constructor() {
    super();
    this.state = {
      updated: false
    }
  }


  //
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.getEvents != this.props.getEvents){
  //     // console.log('nextprops hit;', nextProps)
  //     if(nextProps.getEvents){
  //       // console.log('elem hit;')
  //       this.setState({ updated: true })
  //     }
  //   }
  // }

  render () {

    // if (!this.props.login.loggedIn) {
    //   return (
    //     <Redirect to={ '/login'}/>
    //   )
    // }

     let myEvents = this.props.getEvents
     .filter(elem => {
       if(elem.id == this.props.match.params.id){
         return elem
       }
     }).map((elem, i) => {
       return <EventShow1 key={elem.id} elem={elem} />
     })

    return (
    <ul>
      {myEvents}
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

// function matchDispatchToProps(dispatch){
//   return {
//     getEventAction: bindActionCreators(login, dispatch),
//   }
// }

export default connect(mapStateToProps, null)(EventShow);
