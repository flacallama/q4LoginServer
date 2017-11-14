import React from "react";
import LoginGroup from './login/LoginGroup';


export default class Layout extends React.Component {

  render() {
    return (
      <div className="test">
        <h1>The bizness</h1>
        <LoginGroup />
      </div>
    );
  }
}
