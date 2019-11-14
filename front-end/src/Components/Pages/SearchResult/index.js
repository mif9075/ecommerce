import React, { Component } from "react";
import { connect } from "react-redux";

class SearchResult extends Component {
  render() {
    console.log(this.props.searchResults);
    return (
      <div>
        {this.props.searchResults.username || this.props.searchResults.name}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.search;
};
export default connect(mapStateToProps, null)(SearchResult);
