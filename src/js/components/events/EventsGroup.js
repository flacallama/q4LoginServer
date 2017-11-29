import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Events from './Events';
import Event from './Event';

class EventsGroup extends Component {
  constructor() {
    super();
  }


  render () {
    return (


        <Events />

    )
  }
}
export default EventsGroup;
