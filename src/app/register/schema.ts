import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "must be at least 3 characters long")
      .max(10, "must be less than 10 characters long"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
        "Please enter a valid email"
      )
      .required("Email is required"),
    password: yup.string().min(6, "must be at least 6 characters long"),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not must match")
      .min(6, "must be at least 6 characters long"),
  })
  .required();

export default schema;
