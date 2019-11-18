import React, { Component } from "react";
import { connect } from "react-redux";
// import { getCloudiByID } from '../../../redux/action/cloudiAction';
import { getAllCloudis } from "../../../redux/action/cloudiAction";
import Spinner from "../../../Factory/Spinner";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

class SeeCloudi extends Component {
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
      this.props.getAllCloudis

        //   (this.props.match.params.id)

        .then(cloudi => {
          this.setState({
            title: cloudi.title,
            image: cloudi.image,
            isFetching: false
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    // console.log(this.props)
    const { title, image, isFetching } = this.state;

    // console.log(image)
    var image1 = image.substring(image.lastIndexOf("/") + 1);

    let cloudiInfo = (
      <div className="App">
        <h1>Image Title: {title}</h1>
        <div>
          <CloudinaryContext cloud_name="beisboldom">
            <Image publicId={image1} secure="true">
              <Transformation effect="grayscale" />
              {/* <Transformation effect="improve:outdoor" /> */}
            </Image>
          </CloudinaryContext>

          {/* <img src={image} alt="hamster" /> */}
        </div>
      </div>
    );

    return isFetching ? <Spinner /> : cloudiInfo;
  }
}

export default connect(null, { getAllCloudis })(SeeCloudi);
