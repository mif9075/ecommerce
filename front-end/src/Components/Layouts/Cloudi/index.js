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
        width: 350,
        padding: 48
    },
    media: {
        height: 350,
    }
}

class Cloudi extends Component {
    
    state = {

        user: true

    }

    render() {

        return(
            <Card className={this.props.classes.card}>
            <CardActionArea>
              <CardMedia
                
                className={this.props.classes.media}
                image={this.props.image}
                title="Album"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            {
              !this.props.userProfileUrl ? (
                <Button size="small" color="primary">
                  <Link
                    to={{
                      pathname: `/see-cloudi/${this.props._id}`,
                      state: {
                        id: this.props._id,
                        title: this.props.title,
                        image: this.props.image
                      }
                    }}
                  >Learn More</Link>
                </Button>
              ) : (
                <Button size="small" color="primary" onClick={() => this.props.handleUserCloudiByID(this.props._id)}>
                  Delete
                </Button>
              )
            }
            </CardActions>
          </Card>
          )

    }
}

export default withStyles(styles)(Cloudi);