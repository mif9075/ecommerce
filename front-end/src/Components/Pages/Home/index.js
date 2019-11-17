import React, { Component } from "react";
// import ShowAllUserCloudis from '../../Layouts/ShowAllUserCloudi'
import ShowAllCloudis from "../../Layouts/ShowAllCloudis";
import ShowAllAlbums from "../../Layouts/ShowAllAlbums"

export default class Home extends Component {
  render() {
    return (
      <div>
        <br />
        <h1>Welcome to PicHub!!!</h1>

        {/* <br />
        <hr style={{ width: "50%" }} /> */}
        <ShowAllAlbums />
        <br />
        <hr style={{ width: "50%" }} />
        <ShowAllCloudis />
      </div>
    );
  }
}
