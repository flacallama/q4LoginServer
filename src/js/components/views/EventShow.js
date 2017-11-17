import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import EventShowOne from '../events/EventShowOne';
// import { bindActionCreators } from 'redux';


class EventShow extends Component {
  constructor() {
    super();
    // this.state = {
    //   updated: false
    // }
  }

  // componentDidMount(){
  //   this.props.getEventsAction()
  // }

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
    if (!this.props.login.loggedIn) {
      return (
        <Redirect to={ '/login'}/>
      )
    }

     let myEvents = this.props.getEvents
     .filter(elem => {
       if(elem.id == this.props.match.params.id){
         return elem
       }
     }).map((elem, i) => {
       return <EventShowOne key={elem.id} elem={elem} />
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
    getEvents: state.getEvents
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     loginAction: bindActionCreators(login, dispatch),
//   }
// }

export default connect(mapStateToProps, null)(EventShow);
