import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriends } from '../../actions/getFriends';


class Friend extends Component {
  constructor() {
    super();
  }

  render () {


    return (
      <div className="friendBox" >
        <div className="friendNameBox">
          <h6>{this.props.elem.username}</h6>
        </div>

        <div className="friendImageBox">
          <img src={this.props.elem.picUrl} className="friendImageImg"/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    getFriends: state.getFriends
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     getFriendsAction: bindActionCreators(getFriends, dispatch),
//   }
// }

export default connect(mapStateToProps, null)(Friend);
