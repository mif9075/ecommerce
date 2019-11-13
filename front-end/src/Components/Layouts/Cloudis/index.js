import React, { Component } from 'react'
import Cloudi from '../Cloudi'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const styles ={
    root: {
        flexGrow: 1,
        marginTop: 15,
    }
}

class Cloudis extends Component {

    render() {
        const { cloudis } = this.props.cloudi;

        return (
            <div className={this.props.classes.root}>
                <Grid container justify="center" spacing={1}>
                    {
                        cloudis.map((cloudi) => {
                            return (
                                <Grid key={cloudi._id} item>
                                    <Cloudi {...cloudi} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cloudi: state.cloudi,
    }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Cloudis));