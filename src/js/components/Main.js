import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginGroup from './login/LoginGroup';
import FriendsGroup from './friends/FriendsGroup';
import FriendsDetailsGroup from './friendsDetails/FriendsDetailsGroup';
import Calendar from './views/Calendar';
import EventCreate from './views/EventCreate';
import Events from './views/Events';
import Friends from './views/Friends';
import FriendsShow from './views/FriendsShow';
import PageNotFound from './views/PageNotFound';
import Root from './views/Root';
import LoginLanding from './views/LoginLanding';


class Main extends Component {

  render () {

    return (
      <main>
        <Switch>
          <Route exact path="/" render={props => <Root {...props} /> } />
          <Route exact path="/events" render={props => <Events {...props} /> } />
          <Route exact path="/event/create" render={props => <EventCreate {...props} /> } />
          <Route exact path="/friends" render={props => <Friends {...props} /> } />
          <Route exact path="/friend/:id" render={props => <FriendsShow {...props} /> } />
          <Route exact path="/calendar" render={props => <Calendar {...props} /> } />
          <Route exact path="/login" render={props => <LoginLanding {...props} /> } />
          <Route exact path="/404" component={PageNotFound} />
        </Switch>
      </main>
    )
  }
}

// function mapStateToProps(state, props){
//   return {
//     example1: state.example
//   }
// }
//
// function matchDispatchToProps(dispatch){
//   return {
//     exampleAction: bindActionCreators(example, dispatch)
//   }
// }


export default /*connect(mapStateToProps, matchDispatchToProps)*/(Main);
