import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriends } from '../../actions/getFriends';
import { Link } from 'react-router-dom';


class Friend extends Component {
  constructor() {
    super();
  }

  render () {
    let pathid = "/friends/" + this.props.elem.id

    return (
      <Link to={pathid}>
        <div className="friendBox" >
          <div className="friendNameBox">
            <h6>{this.props.elem.username}</h6>
          </div>

          <div className="friendImageBox">
            <img src={this.props.elem.picUrl} className="friendImageImg"/>
          </div>
        </div>
      </Link>
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
