import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putEventRSVP } from '../../../actions/getEvent';
import { Link } from 'react-router-dom';


class Friend extends Component {
  constructor() {
    super();
    this.state = {
      update: false
    }
  }

  update = () => {
    this.setState({
      update: !this.state.update
    })

  }




  render () {
    let pathid = "/friends/" + this.props.elem.id
    // console.log('elem', this.props.elem);
    console.log('selected', this.props.selectedEvent);
    // console.log('fetchedEvents', this.props.fetchedEvents);

    if(this.props.selectedEvent){

      // curEvent returns the selected event inviteeObj
      let curEvent = this.props.fetchedEvents.filter(elem =>{
        // console.log('elem', elem);
        if(parseInt(elem.id) == parseInt(this.props.selectedEvent)){
          // console.log("filtered Elem", elem);
          return elem
        }
      })

      // this drills down to the inviteesObj
      let inviteesObj = curEvent[0].inviteesObj;
      // console.log('inviteesObj', inviteesObj);

      // takes value from each element of inviteesObj
      var rsvpText = null
      for (let id in inviteesObj){
        if(id === this.props.elem.id.toString()){
          rsvpText = inviteesObj[id]
        }
      }

      
      var inviteRSVP = () => {
        inviteesObj[this.props.elem.id.toString()] = "invited";
        this.props.putEventRSVPAction(curEvent[0].id, inviteesObj)
        rsvpText = "Invited!"
        this.update()
      }

    }





    return (
      <div>
        <div className="link friendBox">
          <Link to={pathid}>
            <div className="friendNameBox">
              {this.props.elem.username}
            </div>

            <div className="friendImageBox">
              <img src={this.props.elem.picUrl} className="friendImageImg"/>
            </div>
          </Link>
        </div>
        {!this.props.selectedEvent ? '' : rsvpText ? rsvpText : <button onClick={inviteRSVP}>invite</button>}
      </div>


    )
  }
}

function mapStateToProps(state, props){
  return {
    getFriends: state.getFriends
  }
}

function matchDispatchToProps(dispatch){
  return {
    putEventRSVPAction: bindActionCreators(putEventRSVP, dispatch),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Friend);
