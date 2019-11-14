import React, { Component } from 'react'
import Cloudis from '../Cloudis'
import { connect } from 'react-redux';
import { getAllCloudis } from '../../../redux/action/cloudiAction';
import Spinner from '../../../Factory/Spinner';

class ShowAllCloudis extends Component {

    state = {
        loading: false,
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        this.props.getAllCloudis()
            .then(() => {
                this.setState({
                    loading: false
                })
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
            })
    }

    render() {
        return(
            <div>
                Welcome !
                <br />
                {
                    this.state.loading ? <Spinner /> : <Cloudis />
                }
            </div>
        )
    }
}

export default connect(null, {getAllCloudis})(ShowAllCloudis)