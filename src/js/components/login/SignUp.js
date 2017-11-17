import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp } from '../../actions/signUp'

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    }
  }




  render () {
    return (
      <div className="">

        <form
          onSubmit={e => { this.props.signUpAction(
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



// function mapStateToProps(state, props){
//   return {
//     getGifts: state.getGifts
//   }
// }

function matchDispatchToProps(dispatch){
  return {
    signUpAction: bindActionCreators(signUp, dispatch),

  }
}
export default connect(null, matchDispatchToProps)(SignUp);
