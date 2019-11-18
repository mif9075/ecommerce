import React, { Component } from "react";
import { connect } from "react-redux";
import AlbumCard from "../../Cards/AlbumCard";
import { Button } from "@material-ui/core";

class SearchResult extends Component {
  render() {
    let notFounded = <div></div>;
    let resultCard = <div></div>;

    if (this.props.searchResults === 404) {
      notFounded = (
        <div>
          <h2>Not Found</h2>
          <p>Please check Username or Album and make sure it spell correctly</p>
        </div>
      );
    }
    if (this.props.searchResults.username) {
      notFounded = (
        <div>
          <h3>User:</h3>
          <Button variant="outlined" color="primary" href="/albums">
            {this.props.searchResults.username}
          </Button>
        </div>
      );
    }

    if (this.props.searchResults.name) {
      notFounded = <AlbumCard />;
    }

    return (
      <div>
        <h1>Search Result:</h1>
        {notFounded}
        {/* <h3>
          {this.props.searchResults.username || this.props.searchResults.name}
        </h3> */}
        <resultCard />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.search;
};
export default connect(mapStateToProps, null)(SearchResult);
