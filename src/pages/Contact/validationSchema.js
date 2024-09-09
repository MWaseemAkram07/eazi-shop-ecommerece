import * as Yup from "yup";

// Validation schema for Formik form
export const contactValidationSchema = Yup.object().shape({
  clientName: Yup.string().required("Enter your Name"),
  email: Yup.string().email("Enter a valid Email").required("Enter your Email"),
  messages: Yup.string().required("Enter your Message"),
});
