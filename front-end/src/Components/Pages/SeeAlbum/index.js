import React, { Component } from "react";
import { connect } from "react-redux";
// import { getCloudiByID } from '../../../redux/action/cloudiAction';
import { getAllAlbums } from "../../../redux/action/albumAction";
import Spinner from "../../../Factory/Spinner";
// import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';



class SeeAlbum extends Component {
  state = {
    title: "",
    image: "",
    isFetching: null
  };
  
  componentDidMount() {
    if (this.props.location.state !== undefined) {
      this.setState({
        title: this.props.location.state.title,
        image: this.props.location.state.image
      });
    } else {
      this.setState({
        isFetching: true
      });
      this.props.getAllAlbums

        //   (this.props.match.params.id)

        .then(album => {
          this.setState({
            title: album.title,
            image: album.image,
            isFetching: false
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {

console.log(this.props)
    const { title, image, isFetching } = this.state;

    // console.log(image)
    // var image1 = image.substring(image.lastIndexOf('/')+1);

    let albumInfo = (
      <div className="App">
        <h1>Image Title: {title}</h1>
        <div>
        {/* <CloudinaryContext cloud_name= "beisboldom">
        <Image publicId={image1}  secure="true">
        <Transformation effect="grayscale" />
        </Image>
        </CloudinaryContext> */}

          {/* <img src={image} alt="hamster" /> */}
        </div>
      </div>
    );

    return isFetching ? <Spinner /> : albumInfo;
  }
}

export default connect(null, { getAllAlbums })(SeeAlbum)