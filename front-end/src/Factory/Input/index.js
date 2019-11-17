import React from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";
import {
  TextValidator,
  SelectValidator
} from "react-material-ui-form-validator";

const Input = props => {
  const { input } = props;
  let dynamicInputField = null;

  switch (input.type) {
    case "title":
      dynamicInputField = (
        <TextValidator
          id={input.id}
          label={input.label}
          required={input.required}
          style={input.style}
          name={input.name}
          type={input.type}
          value={props.title}
          validators={input.validators}
          errorMessages={input.errorMessages}
          onChange={props.handleInputChange}
        />
      );
      break;

    case "text":
      dynamicInputField = (
        <TextValidator
          id={input.id}
          label={input.label}
          required={input.required}
          style={input.style}
          name={input.name}
          type={input.type}
          fullWidth={input.fullWidth}
          margin={input.margin}
          variant={input.variant}
          value={props.username}
          validators={input.validators}
          errorMessages={input.errorMessages}
          onChange={props.handleInputChange}
          autoFocus={input.autoFocus}
        />
      );
      break;

    case "email":
      dynamicInputField = (
        <TextValidator
          id={input.id}
          label={input.label}
          required={input.required}
          style={input.style}
          name={input.name}
          type={input.type}
          value={props.email}
          validators={input.validators}
          errorMessages={input.errorMessages}
          onChange={props.handleInputChange}
          margin={input.margin}
          fullWidth={input.fullWidth}
          variant={input.variant}
          autoFocus={input.autoFocus}
          autoComplete={props.autoComplete}
        />
      );
      break;

    case "password":
      dynamicInputField = (
        <TextValidator
          id={input.id}
          label={input.label}
          required={input.required}
          style={input.style}
          name={input.name}
          type={input.type}
          value={props.password}
          validators={input.validators}
          errorMessages={input.errorMessages}
          onChange={props.handleInputChange}
          variant={input.variant}
          fullWidth={input.fullWidth}
          margin={input.margin}
          autoComplete={input.autoComplete}
        />
      );
      break;
    case "confirmPassword":
      dynamicInputField = (
        <TextValidator
          id={input.id}
          label={input.label}
          required={input.required}
          style={input.style}
          name={input.name}
          type="password"
          variant={input.variant}
          fullWidth={input.fullWidth}
          value={props.confirmPassword}
          validators={input.validators}
          errorMessages={input.errorMessages}
          onChange={props.handleInputChange}
          margin={input.margin}
        />
      );
      break;
    case "select":
      dynamicInputField = (
        <FormControl style={input.style}>
          <InputLabel htmlFor="input-album" style={{ top: "-15px" }}>
            {props.album ? "" : "Select Album"}
          </InputLabel>
          {/* Albums */}
          <SelectValidator
            value={props.album || ""}
            onChange={props.handleInputChange}
            validators={input.validators}
            errorMessages={input.errorMessages}
            name={input.name}
          >
            {props.albums.map(option => {
              return (
                <MenuItem key={option.name} value={option.name}>
                  {option.name}
                </MenuItem>
              );
            })}
          </SelectValidator>
        </FormControl>
      );

      break;
    case "multiline":
      dynamicInputField = (
        <TextField
          id={input.id}
          label={input.label}
          required={input.required}
          style={input.style}
          name={input.name}
          type={input.name}
          onChange={props.handleInputChange}
          rows={input.rows}
          multiline={input.multiline}
        />
      );

      break;

    default:
      return null;
  }

  return <>{dynamicInputField}</>;
};

export default Input;
