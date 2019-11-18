const formArray = [
  {
    input: {
      type: "email",
      name: "email",
      variant: "outlined",
      margin: "normal",
      fullWidth: true,
      autoComplete: "email",
      autoFocus: true,
      id: "input-email",
      label: "Email Address",
      validators: ["required", "isEmail"],
      errorMessages: ["this field is required", "email is not valid"]
    }
  },
  {
    input: {
      variant: "outlined",
      margin: "normal",
      fullWidth: true,
      autoComplete: "current-password",
      type: "password",
      name: "password",
      id: "input-password",
      label: "password",
      validators: ["required"],
      errorMessages: ["this field is required"]
    }
  }
];

export default formArray;
