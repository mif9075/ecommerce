import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";

const Home = React.lazy(() => import("./Components/Pages/Home"));
const Navbar = React.lazy(() => import("./Components/Layouts/Navbar"));
const Footer = React.lazy(() => import("./Components/Layouts/Footer"));
const Signin = React.lazy(() => import("./Components/Pages/Signin"));
const Signup = React.lazy(() => import("./Components/Pages/Signup"));

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
<<<<<<< HEAD
          <Route exact path="/sign-in" component={Signin} />
          <Route exact path="/sign-up" component={Signup} />
=======
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path="/sign-in" component={Signin} />
>>>>>>> e28726d01469179d80ba75c446d4da4089eca47d
        </Switch>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    authUser: state.authUser
  };
};

export default withRouter(connect(mapStateToProps, null )( App ));
