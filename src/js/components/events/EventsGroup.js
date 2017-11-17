import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Events from './Events';
import Event from './Event';

class EventsGroup extends Component {
  constructor() {
    super();
  }

  // <Switch>
  //   <Route exact path='/events' component={Events}/>
  //   <Route path='/event/:id' component={Event}/>
  // </Switch>

  render () {
    return (
      <Events />
    )
  }
}
export default EventsGroup;
