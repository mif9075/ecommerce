import React, { Component } from "react";
import ButtonClass from "../../../Factory/Button/";
import formArray from "./CreateCloudiConfig";
import { ValidatorForm } from "react-material-ui-form-validator";
import Input from "../../../Factory/Input/index";
import Spinner from "../../../Factory/Spinner/index";
import { connect } from "react-redux";
import { createCloudi } from "../../../redux/action/cloudiAction";

class CreateCloudi extends Component {
  state = {
    formData: {
      title: '',
      image: ''
    },
    submitted: false,
    uploadPictureToggle: false
  };

  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: "beisboldom",
        upload_preset: "wdhfcxjk",
        tags: ['hamster']
      },
      (error, result) => {
        if (error) {
          console.log(error);
        } else {
          if (result.event === "success") {
            console.log(result.info.secure_url);
            const { formData } = this.state;
            formData["image"] = result.info.secure_url;
            this.setState({
              ...this.state,
              formData,
            });
          }
        }
      }
    );
  };

  successfullyCreatedCloudi = () => {
    this.setState({
      submitted: false,
      formData: {
        email: '',
        password: ''
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // console.log(event)

    this.setState(
      {
        submitted: true
      },
      () => {
        let newUserObj = Object.assign({}, this.state.formData);
        // console.log(newUserObj)

        newUserObj.id = this.props.authUser.user.id;

        // console.log(this.props)

        this.props.createCloudi(newUserObj)
          .then(() => {
            this.successfullyCreatedCloudi();
            this.props.history.push('/');
          })
          .catch(error => {
            console.log(error);
            this.setState({
              submitted: false
            });
          });
      });
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
        </ValidatorForm>

        <ButtonClass
          onClick={this.uploadWidget}
          color="primary"
          variant="outlined"
          type="submit"
          style={{ top: "-110px" }}
        >
          Add Image
        </ButtonClass>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};

export default connect(
  mapStateToProps,
  { createCloudi }
)(CreateCloudi);
