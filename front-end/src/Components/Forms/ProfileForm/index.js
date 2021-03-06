import React, { Component } from "react";
import { connect } from "react-redux";
import InputClass from "../../../Factory/Input";
import UserProfileInfoArray from "./ProfileFormConfig";
import { ValidatorForm } from "react-material-ui-form-validator";
import ButtonClass from "../../../Factory/Button";
// import Spinner from '../../../Factory/Spinner'

class UserProfileInfo extends Component {
  state = {
    userData: {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    },
    submitted: false
  };

  componentDidMount() {
    this.setState({
      userData: {
        email: this.props.authUser.user.email,
        username: this.props.authUser.user.username,
        password: "",
        confirmPassword: ""
      }
    });
  }

  handleInputChange = event => {
    const { userData } = this.state;
    userData[event.target.name] = event.target.value;
    this.setState({ userData });
  };

  handleSubmit = event => {};

  render() {
    const { submitted } = this.state;

    return (
      <div className="App">
        <ValidatorForm className="Form" onSubmit={this.handleSubmit}>
          {UserProfileInfoArray.map(form => {
            return (
              <div key={form.input.label}>
                <InputClass
                  {...form}
                  {...this.state.userData}
                  handleInputChange={this.handleInputChange}
                />
              </div>
            );
          })}

          <br />
          <br />

          <ButtonClass
            color="primary"
            variant="contained"
            type="submit"
            disabled={submitted}
          >
            {(submitted && "Profile Updated") ||
              (!submitted && "Update Profile")}
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

export default connect(mapStateToProps, null)(UserProfileInfo);
