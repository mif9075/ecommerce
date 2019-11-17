import React, { Component } from "react";
import { connect } from "react-redux";

class SearchResult extends Component {
  render() {
    let display = <div></div>;
    if (this.props.searchResults === 404) {
      display = (
        <div>
          <h2>Not Found</h2>
          <p>Please check Username or Album and make sure it spell correctly</p>
        </div>
      );
    }
    return (
      <div>
        <h1>Search Result:</h1>
        {display}
        <h3>
          {this.props.searchResults.username || this.props.searchResults.name}
        </h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.search;
};
export default connect(mapStateToProps, null)(SearchResult);
