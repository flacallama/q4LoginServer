import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/login';
import LoginActive from './LoginActive';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    }
  }

  componentDidMount(){
    this.props.loginAction();
  }

  render () {
    console.log("login: this.props.login", this.props.login, this.props.login[0])
    return (
      <div>
        <div>
          {this.props.login[0] ? <LoginActive /> : "Please log in"}
        </div>
        <form
          onSubmit={e => { this.props.loginAction(
            this.state.username,
            this.state.password
          )
          e.preventDefault();
          // this.resetState();
          e.target.reset();
        }}

        >
          <input className="form-control" name="username" placeholder="username" onChange={e => this.setState({username: e.target.value})}/>
          <input className="form-control" name="password" placeholder="password" onChange={e => this.setState({password: e.target.value})}/>

          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>

        </form>

      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    login: state.login
  }
}

function matchDispatchToProps(dispatch){
  return {
    loginAction: bindActionCreators(login, dispatch),

  }
}
export default connect(mapStateToProps, matchDispatchToProps)(Login);
