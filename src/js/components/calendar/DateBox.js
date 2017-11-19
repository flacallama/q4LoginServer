import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putDate } from '../../actions/getFriends';
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
      console.log("includes date");
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
    console.log('origArr', origArr, 'modifiedArr', modifiedArr, 'elem', this.props.element);


    // this is updating the dateFreeArr in mongo
    this.props.putDateAction(modifiedArr, this.props.login.userData.id)

    var element = this.props.element;
    var userId = this.props.login.userData.id

    console.log('putDate', this.props.putDate);
  }


  render () {


    let currMonth = this.props.currMonth
    let elem = this.props.element
    let index = this.props.index
    let selected = this.state.selected
    let eventObj = nextProps.getFriend.friend[0].eventObj


    return (

        <div id={currMonth !== elem.substring(0,7) ? "grey" : ""} className={selected ? "dateBox green" : "dateBox"} onClick={this.onClick}>
          <h6 id="monDay">{elem.substring(5, 10)}</h6>
          {this.state.updated ? <h6></h6> : "nope"}
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
