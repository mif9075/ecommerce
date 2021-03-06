import React, { Component } from "react";
import Cloudi from "../../Cards/CloudiCard";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getAllUserCloudis,
  handleUserCloudiByID
} from "../../../redux/action/cloudiAction";
import Spinner from "../../../Factory/Spinner";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 15
  }
};

class AllAlbumCloudis extends Component {
  state = {
    isFetching: false
  };

  // componentDidMount() {
  //   this.setState({
  //     isFetching: true
  //   });

  //   this.props
  //     .getAllUserCloudis(this.props.authUser.user.id)
  //     .then(allUserCloudis => {
  //       this.setState({
  //         isFetching: false
  //       });
  //     })
  //     .catch(error => {
  //       this.setState({
  //         isFetching: false
  //       });
  //       console.log(error);
  //     });
  // }

  render() {
    const { albums } = this.props.album;

    const userProfileUrl = this.props.match.url;

    let userCloudisGrid = (
      <Grid container justify="center" spacing={1}>
        {albums.map(cloudi => {
          return (
            <Grid key={cloudi._id} item>
              <Cloudi
                {...cloudi}
                userProfileUrl={userProfileUrl}
                handleUserCloudiByID={this.props.handleUserCloudiByID}
              />
            </Grid>
          );
        })}
      </Grid>
    );

    return (
      <div className={this.props.classes.root}>
        {this.state.isFetching ? <Spinner /> : userCloudisGrid}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    album: state.album,
    cloudi: state.cloudi,
    authUser: state.authUser
  };
};

export default connect(mapStateToProps, {
  getAllUserCloudis,
  handleUserCloudiByID
})(withRouter(withStyles(styles)(AllAlbumCloudis)));
