import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfileInfo from "../UserProfileInfo/UserProfileInfo";
import ShowAllUserCloudis from "../../Layouts/ShowAllUserCloudi/";

class UserProfile extends Component {
  render() {
    return (
      <div className="App">
        <UserProfileInfo />
        <br />
        <hr style={{ width: "50%" }} />
        <ShowAllUserCloudis />
      </div>
    );
  }
}

export default connect(null, null)(UserProfile);
