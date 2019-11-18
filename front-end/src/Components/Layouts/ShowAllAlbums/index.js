import React, { Component } from "react";
import Albums from "../Albums/Albums";
import { connect } from "react-redux";
import { getAllAlbums } from "../../../redux/action/albumAction";
import Spinner from "../../../Factory/Spinner";

class ShowAllAlbums extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    this.props
      .getAllAlbums()
      .then(() => {
        this.setState({
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      });
  }

  render() {
    return (
      <div>
        All Albums!
        <br />
        {this.state.loading ? <Spinner /> : <Albums />}
      </div>
    );
  }
}

export default connect(null, { getAllAlbums })(ShowAllAlbums);
