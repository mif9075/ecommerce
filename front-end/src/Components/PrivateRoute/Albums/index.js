import React, { Component } from "react";
import AllUserAlbums from "../../User/ShowAllUserAlbums";
import { Button } from "@material-ui/core";

export default class AlbumsPriv extends Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Albums:</h1>
        <Button variant="outlined" color="primary" href="/create-album">
          Create Album
        </Button>
        <AllUserAlbums />
      </>
    );
  }
}
