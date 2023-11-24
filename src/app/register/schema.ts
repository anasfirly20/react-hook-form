import * as yup from "yup";

const schema = yup.object({
  fullName: yup
    .string()
    .required("Field is required")
    .min(3, "must be at least 3 characters long")
    .max(10, "must be less than 10 characters long"),
  email: yup
    .string()
    .required("Field is required")
    .email("Please enter a valid email")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
      "Please enter a valid email"
    ),
  password: yup
    .string()
    .required("Field is required")
    .min(6, "must be at least 6 characters long"),
  repeatPassword: yup
    .string()
    .required("Field is required")
    .min(6, "must be at least 6 characters long")
    .oneOf([yup.ref("password")], "Passwords do not must match"),
});

export default schema;
