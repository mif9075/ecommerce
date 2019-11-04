import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import Signup from "./Components/Signup/Signup";
import Signin from "./Components/Signin/Signin";

const Home = React.lazy(() => import("./Components/Home"));
const Navbar = React.lazy(() => import("./Components/Layouts/Navbar"));
const Footer = React.lazy(() => import("./Components/Layouts/Footer"));

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path="/sign-in" component={Signin} />
        </Switch>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    test: state.test
  };
};

export default connect(
  mapStateToProps   ,
  {
      actionType: "TWO"
  }
)(App);
