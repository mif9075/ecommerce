import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import CreateIcon from "@material-ui/icons/Create";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ValidatorForm } from "react-material-ui-form-validator";
import formArray from "./SignupFormConfig";
import Input from "../../../Factory/Input";
import {
  signup,
  handleSignupError
} from "../../../redux/action/authUserAction";
import MessageBar from "../../../Factory/MessageBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        PicHub
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [submitted, setSubmitted] = useState({
    submitted: false
  });

  const [redirect, setRedirect] = useState({
    redirectSecond: "",
    redirectToggle: false
  });

  const dispatch = useDispatch();
  const message = useSelector(state => state.message);

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== formData.password) {
        return false;
      } else {
        return true;
      }
    });
  });

  const resetState = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    setSubmitted({
      submitted: false
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitted({
      submitted: true
    });

    dispatch(signup(formData))
      .then(() => {
        resetState();
        setRedirect({
          ...redirect,
          redirectToggle: true
        });
        countDownRedirect();
      })
      .catch(error => {
        console.log(error.response.data.message);
        dispatch(handleSignupError(error.response.data.message));
        setSubmitted({
          submitted: false
        });
      });
  };

  const countDownRedirect = () => {
    var timeleft = 8;
    var downloadtimer = setInterval(function() {
      timeleft -= 1;
      setRedirect({
        redirectSecond: timeleft,
        redirectToggle: true
      });

      if (timeleft === 0) {
        clearInterval(downloadtimer);
        props.history.push("./sign-in");
      }
    }, 750);
  };

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const renderInputs = () => {
    let inputs = formArray.map((field, index) => {
      return (
        <div key={field.input.label}>
          <Input {...field} {...formData} handleInputChange={handleChange} />
        </div>
      );
    });
    return inputs;
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        {message.serverMessage !== null ? (
          <MessageBar
            fontColorStyle={message.messageStyle.fontColorStyle}
            dynamicClassName={message.messageStyle.dynamicClassName}
          >
            <Typography>
              {message.serverMessage}{" "}
              {redirect.redirectToggle
                ? `Redirecting in ${redirect.redirectSecond}`
                : ""}
            </Typography>
          </MessageBar>
        ) : (
          ""
        )}
        <ValidatorForm
          className={classes.form}
          onSubmit={handleSubmit}
          noValidate
        >
          {renderInputs()}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={submitted.submitted}
            className={classes.submit}
          >
            Sign Up
          </Button>
        </ValidatorForm>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
