import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDate } from '../../actions/getDate';


class DateBox extends Component {

  state = {
    selected: false
  }


  onClick = () => {
    this.setState({
      selected: !this.state.selected
    })
    this.props.selectDate(this.props.element)
  }


  render () {
    let currMonth = this.props.currMonth
    let elem = this.props.element
    let index = this.props.index
    let selected = this.state.selected
    console.log("index", index);
    console.log('elem', elem)

    return (

        <div id={currMonth !== elem.substring(0,7) ? "grey" : ""} className={selected ? "dateBox green" : "dateBox"} onClick={this.onClick}>
          <h6 id="monDay">{elem.substring(5, 10)}</h6>
        </div>

    )
  }
}
export default DateBox;
