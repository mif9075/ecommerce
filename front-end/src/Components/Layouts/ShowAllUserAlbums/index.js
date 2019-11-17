import React, { Component } from "react";
// import Album from '../Album'
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllUserAlbums } from "../../../redux/action/albumAction";
import Spinner from "../../../Factory/Spinner";

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 15
  }
};

class AllUserAlbums extends Component {
  state = {
    isFetching: false
  };

  componentDidMount() {
    this.setState({
      isFetching: true
    });

    this.props
      .getAllUserAlbums(this.props.authUser.user.id)
      .then(allUserAlbums => {
        this.setState({
          isFetching: false
        });
      })
      .catch(error => {
        this.setState({
          isFetching: false
        });
        console.log(error);
      });
  }
  render() {
    const { userAlbums } = this.props.album;

    let userAlbumsGrid = (
      <Grid container justify="center" spacing={1}>
        {userAlbums.map(album => {
          return (
            <Grid key={album._id} item>
              {/* <Album {...album} /> */}
              <div class="boxed">
                <h1>Album Name:</h1>
                <h2>{album.name}</h2>
                {/* <h3>{album.timestamp}</h3> */}
              </div>
            </Grid>
          );
        })}
      </Grid>
    );

    return (
      <div className={this.props.classes.root}>
        {this.state.isFetching ? <Spinner /> : userAlbumsGrid}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    album: state.album,
    authUser: state.authUser
  };
};

export default connect(mapStateToProps, { getAllUserAlbums })(
  withRouter(withStyles(styles)(AllUserAlbums))
);
