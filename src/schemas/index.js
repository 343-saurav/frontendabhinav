import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  address: Yup.string().min(5).required("Please enter your address"),
  dob: Yup.string().required("Please enter your dob"),
  mobileNumber:Yup.string().required("Please enter your mobilenumber")
 
});