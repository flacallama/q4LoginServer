import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { query } from '../../actions/query';
import SearchResult from './SearchResult';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class SearchGroup extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      theQuery: null,
      // updated: false,
      wasClicked: false
    }
  }

  // wasClicked = () => {
  //   this.setState({
  //     wasClicked: true
  //   })
  // }


  getQuery = (query) =>{
    axios.get(`http://localhost:1337/users/findUserByUsername/${query}`)
    .then(res => {
      console.log('res.data', res.data);
      if(res.data.user.length === 1){
        console.log('inside first filter');
        const theQuery = res.data;
        this.setState({
          theQuery: theQuery,
          // updated: true,
          wasClicked: true
        });
      } else {
        console.log('login data', this.props.login.userData);
        alert("No user exists")
        this.setState({
          // theQuery: this.props.login.userData,
          // updated: true,
          // wasClicked: false
        });
      }
    });
  }

  // resetState = () => {
  //   this.setState({
  //     query: null,
  //     theQuery: null,
  //     // updated: false,
  //     wasClicked: false
  //   })
  //
  //   console.log('reseting state', this.state);
  // }






  render () {

    // function timerLinkFunct() {
    //     setTimeout(function(){
    //       this.resetState()
    //     }.bind(this),300)
    //   }


    if(this.state.wasClicked){
      console.log('query in result', this.state.theQuery.user[0].username);
      let path = "/friends/" + this.state.theQuery.user[0].id;
      // this.setState({
      //   theQuery: null
      // })
      return (
        <Redirect to={path} />
      )
    }



    // console.log('query', this.props.query);
    return (
      <div>
        <form
          onSubmit={e => { this.getQuery(
            this.state.query
          )
          e.preventDefault();
          // timerLinkFunct();
          // e.target.reset();
        }}

        >
        <div className="formGroup">
          <div className="formComponent1">
            <input className="form-control" name="query" placeholder="Enter a username" onChange={e => this.setState({query: e.target.value})}/>
          </div>
          <div className="formComponent2">
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
        </form>

      </div>
    )
  }
}
// {this.state.updated ? <SearchResult theQuery={this.state.theQuery} wasClickedState={this.state.wasClicked} wasClickedFunc = {this.wasClicked}/> : ''}

function mapStateToProps(state, props){
  return {
    login: state.login,
    query: state.query
  }
}

function matchDispatchToProps(dispatch){
  return {
    queryAction: bindActionCreators(query, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchGroup);
