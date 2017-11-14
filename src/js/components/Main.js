import React, { Component } from 'react';
// import Header from './Header';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { example } from '../actions/example'

class Main extends Component {

  render () {

console.log(this.props)
    return (
      <div>

        <div className="container">
          main is rendering
          <h1>{this.props.example1}</h1>
          <button onClick={this.props.exampleAction}>action</button>
        </div>
      </div>
    )
  }
}

// function mapStateToProps(state, props){
//   return {
//     example1: state.example
//   }
// }
//
// function matchDispatchToProps(dispatch){
//   return {
//     exampleAction: bindActionCreators(example, dispatch)
//   }
// }


export default /*connect(mapStateToProps, matchDispatchToProps)*/(Main);
