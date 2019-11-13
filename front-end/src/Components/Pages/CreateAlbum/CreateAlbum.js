import React, { Component } from "react";
import ButtonClass from "../../../Factory/Button/";
import formArray from "./CreateAlbumConfig";
import { ValidatorForm } from "react-material-ui-form-validator";
import Input from "../../../Factory/Input/index";
import Spinner from "../../../Factory/Spinner/index";
import { connect } from "react-redux";
import { createAlbum } from "../../../redux/action/cloudiAction";

class CreateAlbum extends Component {
  state = {
    formData: {
      title: '',
    },
    submitted: false,
  };

  successfullyCreatedAlbum = () => {
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

        this.props.createAlbum(newUserObj)
          .then(() => {
            this.successfullyCreatedAlbum();
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
  { createAlbum }
)(CreateAlbum);
