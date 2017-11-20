import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putDate } from '../../actions/getFriends';
import DateBoxEvent from './DateBoxEvent';
// import { getFriend } from '../../actions/getFriends';

class DateBox extends Component {

  state = {
    selected: false,
    updated: false
  }


  componentWillReceiveProps(nextProps){
    if(nextProps.getFriend != this.props.getFriend){
      this.setState({
        updated: true
      })
      // console.log('datebox received nextProps', nextProps.getFriend, this.props.getFriend);
    }
    if(nextProps.getFriend.friend[0].dateFreeArr.includes(this.props.element)){
      this.setState({
        selected: true
      })
    } else {
      this.setState({
        selected: false
      })
    }
  }

  onClick = () => {
    // this.props.selectDate(this.props.element)

    // original from array from redux we're going to
    let origArr = this.props.getFriend.friend[0].dateFreeArr;
    // modify according to if it's selected or not
    let modifiedArr

    if(origArr.includes(this.props.element)){
      modifiedArr = origArr.filter(el => el != this.props.element)
    } else {
      modifiedArr = origArr.concat(this.props.element)
    }
    // console.log('origArr', origArr, 'modifiedArr', modifiedArr, 'elem', this.props.element);


    // this is updating the dateFreeArr in mongo
    this.props.putDateAction(modifiedArr, this.props.login.userData.id)

    var element = this.props.element;
    var userId = this.props.login.userData.id

    console.log('putDate', this.props.putDate);
  }


  render () {
    var todaysEvents = []
    let getMyEvents = () => {
      let eventObj = this.props.getFriend.friend[0].eventObj
      // console.log('eventObj', eventObj);

      for(event in eventObj){
        let eventDate = eventObj[event].toString();
        let todaysDate = this.props.element.toString()
        // console.log('event', eventDate, todaysDate )
        if(eventDate == todaysDate){
          // console.log("eventsss", event)
          todaysEvents.push(event)
        }
      }
      return todaysEvents.map(elem => <li className="eventLi"><DateBoxEvent key={elem.id} id={elem} /></li>)
    }

    let currMonth = this.props.currMonth
    let elem = this.props.element
    let index = this.props.index
    let selected = this.state.selected



    return (

        <div id={currMonth !== elem.substring(0,7) ? "grey" : ""} className={selected ? "dateBox green" : "dateBox"} onClick={this.onClick}>
          <h6 id="monDay">{elem.substring(5, 10)}</h6>
          {this.state.updated ? <ul className="eventUl">{getMyEvents()}</ul> : "nope"}
        </div>

    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login,
    putDate: state.putDate
  }
}

function matchDispatchToProps(dispatch){
  return {
    putDateAction: bindActionCreators(putDate, dispatch)

  }
}

export default connect(mapStateToProps, matchDispatchToProps)(DateBox);
