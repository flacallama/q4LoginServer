import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { query } from '../../actions/query';
import SearchResult from './SearchResult';
import axios from 'axios';


class SearchGroup extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      theQuery: null,
      updated: false,
      wasClicked: false
    }
  }

  wasClicked = () => {
    this.setState({
      wasClicked: true
    })
  }


  getQuery = (query) =>{
    axios.get(`http://localhost:1337/users/findUserByUsername/${query}`)
    .then(res => {
      const theQuery = res.data;
      this.setState({
        theQuery: theQuery,
        updated: true,
        wasClicked: false
      });
    });
  }



  render () {

    // console.log('query', this.props.query);
    return (
      <div>
        <form
          onSubmit={e => { this.getQuery(
            this.state.query
          )
          e.preventDefault();
          e.target.reset();
        }}

        >
        <div className="formGroup">
          <div className="formComponent1">
            <input className="form-control" name="query" placeholder="search username" onChange={e => this.setState({query: e.target.value})}/>
          </div>
          <div className="formComponent2">
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
        </form>
        {this.state.updated ? <SearchResult theQuery={this.state.theQuery} wasClickedState={this.state.wasClicked} wasClickedFunc = {this.wasClicked}/> : ''}

      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    query: state.query
  }
}

function matchDispatchToProps(dispatch){
  return {
    queryAction: bindActionCreators(query, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchGroup);
