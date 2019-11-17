import React, { Component } from 'react'
import Album from '../Album'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import {getAllUserAlbums, deleteUserAlbumByID} from '../../../redux/action/albumAction';
import Spinner from '../../../Factory/Spinner'

const styles = {
  root: {
    flexGrow: 1,
    marginTop: 15,
  }
}

class AllUserAlbums extends Component {


  state = {
    isFetching: false,
  }

  componentDidMount() {

    this.setState({
      isFetching: true
    })

    // console.log(this.props)

    this.props.getAllUserAlbums(this.props.authUser.user.id)
        .then( allUserAlbums => {
  
          this.setState({
            isFetching: false
          })
        })
        .catch(error => {
          this.setState({
            isFetching: false
          })
          console.log(error)
        })
  }


  render() {

    const { userAlbums } = this.props.album; 

    const userProfileUrl = this.props.match.url;

    let userAlbumsGrid = (
      <Grid container justify="center"  spacing={1}>
      { userAlbums.map((album) => {
          return (
            <Grid key={album._id}  item>
            
              <Album {...album} 
                userProfileUrl={userProfileUrl}
                deleteUserAlbumByID={this.props.deleteUserAlbumByID}
                />
            </Grid>
             )
            })
          }
      </Grid>
    )

    return (
      <div className={this.props.classes.root}>
          {this.state.isFetching ? <Spinner /> : userAlbumsGrid}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    album: state.album,
    authUser: state.authUser
  }
}

export default connect(mapStateToProps, { getAllUserAlbums, deleteUserAlbumByID })(withRouter(withStyles(styles)(AllUserAlbums)));