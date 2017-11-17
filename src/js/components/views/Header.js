import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {

  render () {
    return (
      <header>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/event/:id">myEvents</Link></li>
            <li className="active"><Link to="/event/create">makeEvent</Link></li>
            <li><Link to="/calendar">myCal</Link></li>
            {!this.props.login.loggedIn ? <li><Link to="/login">login</Link></li> : <li className="active"><a href="#">Welcome, {this.props.login.userData.username}</a></li>}

          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </header>

    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login
  }
}
// function matchDispatchToProps(dispatch){
//   return {
//     resetCurIdAction: bindActionCreators(resetCurId, dispatch)
//   }
// }

export default connect(mapStateToProps, null)(Header);
