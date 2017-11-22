import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { query } from '../../actions/query';
import SearchResult from './SearchResult';


class SearchGroup extends Component {
  constructor() {
    super();
    this.state = {
      query: null
    }
  }
  render () {

    console.log('query', this.props.query);
    return (
      <div>
        <form
          onSubmit={e => { this.props.queryAction(
            this.state.query
          )
          e.preventDefault();
          e.target.reset();
        }}

        >
        <div className="formGroup">
          <div className="formComponent1">
            <input className="form-control" name="query" placeholder="query" onChange={e => this.setState({query: e.target.value})}/>
          </div>
          <div className="formComponent2">
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
        </form>
        <SearchResult query={this.props.query}/>
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
