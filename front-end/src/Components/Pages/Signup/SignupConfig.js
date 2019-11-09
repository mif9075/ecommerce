const formArray = [
  {
    input: {
      type: "text",
      name: "username",
      id: "input-username",
      label: "Username",
      variant: "outlined",
      fullWidth: true,
      autoFocus: true,
      margin: "normal",
      validators: ["required"],
      errorMessages: ["this field is required"]
    }
  },
  {
    input: {
      type: "email",
      name: "email",
      variant: "outlined",
      margin: "normal",
      fullWidth: true,
      autoComplete: "email",
      id: "input-email",
      label: "Email Address",
      validators: ["required", "isEmail"],
      errorMessages: ["this field is required", "email is not valid"]
    }
  },
  {
    input: {
      variant: "outlined",
      fullWidth: true,
      margin: "normal",
      autoComplete: "current-password",
      type: "password",
      name: "password",
      id: "input-password",
      label: "Password",
      validators: ["required"],
      errorMessages: ["this field is required"]
    }
  },
  {
    input: {
      type: "confirmPassword",
      name: "confirmPassword",
      id: "input-confirm-password",
      label: "Confirm Password",
      variant: "outlined",
      fullWidth: true,
      validators: ["isPasswordMatch", "required"],
      errorMessages: ["password mismatch", "this field is required"],
      margin: "normal"
    }
  }
];

export default formArray;
