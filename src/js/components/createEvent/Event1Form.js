import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { createEvent } from '../../actions/getEvent';


class Event1Form extends Component {
  constructor() {
    super();
    this.state = {
      title: null,
      body: null,
      picUrl: null,


    }
  }

  render () {
    // if (!this.props.login.loggedIn) {
    //   return (
    //     <Redirect to={ '/login'}/>
    //   )
    // }
    // console.log('login info', this.props.login);
    let inviteesObj = {}

    inviteesObj[this.props.login.userData.id] = "accepted"


    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form
              onSubmit={e => { this.props.createEventAction({
                title: this.state.title,
                body: this.state.body,
                picUrl: this.state.picUrl,
                eventStatus: "created",
                creatorId: this.props.login.userData.id,
                inviteesObj: inviteesObj
              })
              e.preventDefault();
              // this.resetState();
              e.target.reset();
            }}

            >
              <input className="form-control" name="title" placeholder="Event Name" onChange={e => this.setState({title: e.target.value})}/>

              <input className="form-control" name="body" placeholder="Description" onChange={e => this.setState({body: e.target.value})}/>

              <input className="form-control" name="picUrl" placeholder="Pic URL" onChange={e => this.setState({picUrl: e.target.value})}/>

              <div className="form-group">
                <input type="submit" className="btn btn-primary" />
              </div>

            </form>
          </div>
        </div>


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
    createEventAction: bindActionCreators(createEvent, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Event1Form);
