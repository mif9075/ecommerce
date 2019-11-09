import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "../../../Factory/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import MatLink from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ValidatorForm } from "react-material-ui-form-validator";
import formArray from "./SigninConfig";
import Input from "../../../Factory/Input";
// import MessageBar from "../../../Factory/MessageBar";
import { NavLink, Link } from "react-router-dom";
import {
  signin,
  handleSignupError
} from "../../../redux/action/authUserAction";
import MessageBar from "../../../Factory/MessageBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="https://material-ui.com/">
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

export default function SignIn(props) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [submitted, setSubmitted] = useState({
    submitted: false
  });

  const message = useSelector(state => state.message);

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const resetState = () => {
    setFormData({
      email: "",
      password: ""
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
    dispatch(signin(formData))
      .then(() => {
        resetState();
        props.history.push("/");
      })
      .catch(error => {
        dispatch(handleSignupError(error.response.data.message));
        setSubmitted({
          submitted: false
        });
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

  // console.log(resource);
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        {message.serverMessage !== null ? (
          <MessageBar
            fontColorStyle={message.messageStyle.fontColorStyle}
            dynamicClassName={message.messageStyle.dynamicClassName}
          >
            <Typography>{message.serverMessage}</Typography>
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
            className={classes.submit}
            // disabled={submitted.submitted}
          >
            {(submitted.submitted && "Your form is submitted!") ||
              (!submitted.submitted && "Submit")}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </ValidatorForm>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
