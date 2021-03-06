import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = {
  card: {
    width: 100,
    padding: 48
  },
  media: {
    height: 100
  }
};

class Album extends Component {
  state = {
    user: true
  };

  render() {
    return (
      <Card className={this.props.classes.card}>
        <Typography gutterBottom variant="h5" component="h2">
          {this.props.name}
        </Typography>
        <CardActionArea>
          <CardContent>
            <CardMedia
              className={this.props.classes.media}
              image={this.props.cover || "/"}
              title="Contemplative Reptile"
            />
            <Typography variant="body2" color="textSecondary" noWrap>
              {this.props.album}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {!this.props.userProfileUrl ? (
            <Button size="small" color="primary">
              <Link
                to={{
                  pathname: `/albums-priv`,
                  state: {
                    id: this.props._id,
                    title: this.props.title,
                    image: this.props.image
                  }
                }}
              >
                Click for Albums
              </Link>
            </Button>
          ) : (
            <Button
              size="small"
              color="primary"
              onClick={() =>
                this.props.deleteUserAlbumByID(
                  this.props._id,
                  this.props.user_id
                )
              }
            >
              Delete
            </Button>
          )}
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Album);
