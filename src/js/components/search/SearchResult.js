import React, { Component } from 'react';
class SearchResult extends Component {
  constructor() {
    super();
  }
  render () {
    console.log('query in result', this.props.query);
    return (
      <div>
        {this.props.query ? 'query returned' : console.log('in query return'. this.props.query)}
      </div>
    )
  }
}
export default SearchResult;
