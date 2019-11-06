import React from 'react';
import {TextField, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { TextValidator, SelectValidator } from 'react-material-ui-form-validator';



const InputClass = (props) => {
    const { input } = props;
    let dynamicInputField = null
    switch (input.type) {

        case('text'):
   
      dynamicInputField = <TextValidator 
                                id={input.id}
                                label={input.label}
                                required={input.required}
                                style={input.style}
                                name={input.name}
                                type={input.type}
                                value={props.username}
                                validators={input.validators}
                                errorMessages={input.errorMessages}
                                onChange={props.handleInputChange}
                          />
      break;

        case('email'):
  
        dynamicInputField = <TextValidator
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
                                />
    break;

    case('password'):

    dynamicInputField = <TextValidator
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
                                />
    break;

    case('confirmPassword'):
    // console.log(input)
    dynamicInputField = <TextValidator
                                id={input.id}
                                label={input.label}
                                required={input.required}
                                style={input.style}
                                name={input.name}
                                type='password'
                                value={props.confirmPassword}
                                validators={input.validators}
                                errorMessages={input.errorMessages}
                                onChange={props.handleInputChange}
                                />
    break;

    default:
        return null;

    }


    return (
        <>
            {dynamicInputField}
        </>
    )
}

export default InputClass