import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    width: 100,
    padding: 48

  },
  media: {
    height: 100,
  }
}

class Album extends Component {

  state = {
    user: true
  }

  render() {

    // console.log(this.props.user_id)

    return(

        
        
      <Card className={this.props.classes.card}>
      <CardActionArea>
        <CardMedia
          className={this.props.classes.media}
          image={this.props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" noWrap>
            {this.props.album}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {
        !this.props.userProfileUrl ? (
          <Button size="small" color="primary">
            <Link
              to={{
                pathname: `/see-album/${this.props._id}`,
                state: {
                  id: this.props._id,
                  title: this.props.title,
                  image: this.props.image
                }
              }}
            >Learn More</Link>
          </Button>
        ) : (
          <Button size="small" color="primary" onClick={() => this.props.deleteUserAlbumByID(this.props._id, this.props.user_id)}>
            Delete
          </Button>
        )
      }
      </CardActions>
    </Card>
    )
  }
}




export default withStyles(styles)(Album);