import React, { Component } from "react";
import ButtonClass from "../../../Factory/Button/";
import formArray from "./CreateAlbumConfig";
import { ValidatorForm } from "react-material-ui-form-validator";
import Input from "../../../Factory/Input/index";
import Spinner from "../../../Factory/Spinner/index";
import { connect } from "react-redux";
import { createAlbum } from "../../../redux/action/albumAction";
import AllUserAlbums from "../../Layouts/ShowAllUserAlbums";

class CreateAlbum extends Component {
  state = {
    formData: {
      title: "",
      cover: ""
    },
    submitted: false
  };

  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: "beisboldom",
        upload_preset: "wdhfcxjk",
        tags: ["hamster"]
      },
      (error, result) => {
        if (error) {
          console.log(error);
        } else {
          if (result.event === "success") {
            // console.log(result.info.secure_url);
            const { formData } = this.state;
            formData["cover"] = result.info.secure_url;
            this.setState({
              ...this.state,
              formData
            });
          }
        }
      }
    );
  };

  successfullyCreatedAlbum = () => {
    this.setState({
      submitted: false,
      formData: {
        email: "",
        password: ""
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState(
      {
        submitted: true
      },
      () => {
        let newUserObj = Object.assign({}, this.state.formData);

        newUserObj.id = this.props.authUser.user.id;

        this.props
          .createAlbum(newUserObj)
          .then(() => {
            this.successfullyCreatedAlbum();
            this.props.history.push("/albums");
          })
          .catch(error => {
            console.log(error);
            this.setState({
              submitted: false
            });
          });
      }
    );
  };

  handleChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  render() {
    const { submitted } = this.state;

    let form = formArray.map((field, index) => {
      return (
        <div key={field.input.label}>
          <Input
            {...field}
            {...this.state.formData}
            handleInputChange={this.handleChange}
          />
          <br />
        </div>
      );
    });

    return (
      <div className="App">
        <ValidatorForm className="Form" onSubmit={this.handleSubmit}>
          {submitted ? <Spinner /> : form}
          <br />
          <div style={{ height: "25px", margin: "25px 20px" }}></div>
          <div style={{ height: "25px", margin: "20px 20px" }}></div>
          <ButtonClass
            color="primary"
            variant="contained"
            type="submit"
            disable="submitted"
          >
            {(submitted && "Your form is submitted!") ||
              (!submitted && "Submit")}
          </ButtonClass>
          <br />
          <hr style={{ width: "50%" }} />
        </ValidatorForm>
        <ButtonClass
          onClick={this.uploadWidget}
          color="primary"
          variant="outlined"
          type="submit"
          style={{ top: "-170px" }}
        >
          Album Cover
        </ButtonClass>
        <AllUserAlbums />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};

export default connect(mapStateToProps, { createAlbum })(CreateAlbum);
