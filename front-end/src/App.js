import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import SeeAlbum from "./Components/Pages/SeeAlbum";

// import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
const AlbumsPage = React.lazy(() => import("./Components/Pages/AlbumsPage"));
const AlbumPage = React.lazy(() => import("./Components/Pages/AlbumPage"));
const AlbumsPriv = React.lazy(() => import("./Components/PrivateRoute/Albums"));
const AlbumPriv = React.lazy(() => import("./Components/PrivateRoute/Album"));
const PrivateRoute = React.lazy(() => import("./Components/PrivateRoute"));
const CreateCloudi = React.lazy(() => import("./Components/Forms/CloudiForm"));
const CreateAlbum = React.lazy(() => import("./Components/Forms/AlbumForm"));
const Home = React.lazy(() => import("./Components/Pages/Home"));
const Navbar = React.lazy(() => import("./Components/Layouts/Navbar"));
const Footer = React.lazy(() => import("./Components/Layouts/Footer"));
const SigninForm = React.lazy(() => import("./Components/Forms/SigninForm"));
const SignupForm = React.lazy(() => import("./Components/Forms/SignupForm"));
const NotFound = React.lazy(() => import("./Components/Pages/NotFound"));
const SeeCloudi = React.lazy(() => import("./Components/Pages/SeeCloudi"));
const UserProfile = React.lazy(() => import("./Components/Forms/ProfileForm"));
const SearchResult = React.lazy(() =>
  import("./Components/Pages/SearchResult")
);

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-in" component={SigninForm} />
          <Route exact path="/sign-up" component={SignupForm} />
          <Route exact path="/search-result" component={SearchResult} />
          <Route exact path="/album" component={AlbumPage} />
          <Route exact path="/albums" component={AlbumsPage} />

          <PrivateRoute exact path="/create-cloudi" component={CreateCloudi} />
          <PrivateRoute exact path="/create-album" component={CreateAlbum} />
          <PrivateRoute exact path="/albums-priv" component={AlbumsPriv} />
          <PrivateRoute exact path="/album-priv" component={AlbumPriv} />
          <PrivateRoute exact path="/see-cloudi/:id" component={SeeCloudi} />
          <PrivateRoute exact path="/user-profile" component={UserProfile} />
          <PrivateRoute exact path="/see-album/:id" component={SeeAlbum} />
          <Route Path="" component={NotFound} />
        </Switch>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};

export default withRouter(connect(mapStateToProps, null)(App));
