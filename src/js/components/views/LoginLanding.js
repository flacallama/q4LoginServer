import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/login';
import LoginGroup from '../login/LoginGroup';


class LoginLanding extends React.Component {
  state = {
    redirectToReferrer: false
    // loginLoaded: false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps != this.props){
      // this.setState({
      //   loginLoaded: true
      // })
      console.log('compwillrecieveprops',nextProps.login.loggedIn)
      if(nextProps.login.LoggedIn){
        this.setState({ redirectToReferrer: true })
      }
    }
  }

  // THIS ISSN'T WORKING
  // componentDidUpdate(){
  //   if (this.state.redirectToReferrer) {
  //     return (
  //       <Redirect to={ '/root'}/>
  //     )
  //   }
  // }

  // componentDidMount(){
  //   this.props.loginAction()
  // }




  // login = () => {
  //   fakeAuth.authenticate(() => {
  //     this.setState({ redirectToReferrer: true })
  //   })
  // }

  render() {
    // let checkCred = () => {
    //     setTimeout(function(){
    //       console.log("checkcred", this.props.login.loggedIn)
    //       return true
    //     }, 1000)
    //   }



    // const { from } = this.props.location.state || { from: { pathname: '/asdf' } }
    // const { redirectToReferrer } = this.state




    // <p>You must log in to view the page at {from.pathname}</p>
    return (
      <div>

        <LoginGroup />
        <div id="disappearWarning">Enter a correct login or create new account</div>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  // console.log('mapping state to props in loginActive', state.login);
  return {
    login: state.login
  }
}

// function matchDispatchToProps(dispatch){
//   return {
//     loginAction: bindActionCreators(login, dispatch),
//   }
// }


export default connect(mapStateToProps, null)(LoginLanding)
