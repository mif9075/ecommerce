import React, { Component } from "react";
import Album from "../Album";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 15
  }
};

class Albums extends Component {
  render() {
    const { albums } = this.props.album;

    return (
      <div className={this.props.classes.root}>
        <Grid container justify="center" spacing={1}>
          {albums.map(album => {
            return (
              <Grid key={album._id} item>
                <Album {...album} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    album: state.album
  };
};

export default connect(mapStateToProps, null)(withStyles(styles)(Albums));
