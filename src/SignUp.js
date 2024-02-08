import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas/index";
const initialValues = {
  name: "",
  email: "",
  password: "",
  address: "",
  dob: "",
  mobileNumber: "",
};
const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 2px;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 0.8rem;
    color: #b22b27;
  }
  .modal-left {
    padding: 40px 20px 10px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 30px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 0.5rem 1rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }
  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 2px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;
const SignUp = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {



        // try {
        //   const response = await fetch('', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(values),
        //   });

        //   if (response.ok) {
        //     // Successful POST request, you can handle the response here
        //     console.log('User successfully registered!');
        //   } else {
        //     // Handle the case where the server returns an error
        //     console.error('Error registering user:', response.statusText);
        //   }
        // } catch (error) {
        //   // Handle any network or other errors that might occur
        //   console.error('Error:', error.message);
        // }
        action.resetForm();
      },
    });

  console.log(errors);

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>

                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values?.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched?.name && errors?.name ? (
                      <p className="form-error">{errors?.name}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched?.email ? (
                      <p className="form-error">{errors?.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values?.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors?.password && touched?.password ? (
                      <p className="form-error">{errors?.password}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <input
                      type="text"
                      autoComplete="off"
                      name="mobileNumber"
                      id="mobileNumber"
                      placeholder="MobileNumber"
                      value={values?.mobileNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched?.mobile && errors?.mobile ? (
                      <p className="form-error">{errors?.mobile}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <input
                      type="text"
                      autoComplete="off"
                      name="address"
                      id="address"
                      placeholder="Address"
                      value={values?.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched?.address && errors?.address ? (
                      <p className="form-error">{errors?.address}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <input
                      type="date"
                      autoComplete="off"
                      name="dob"
                      id="dob"
                      placeholder="DOB"
                      value={values?.dob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched?.name && errors?.name ? (
                      <p className="form-error">{errors?.dob}</p>
                    ) : null}
                  </div>
                  <div className="modal-buttons">
                    <a href="#" className="">
                      Want to register using Gmail?
                    </a>
                    <button className="input-button" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  Already have an account? <a href="#">Sign In now</a>
                </p>
              </div>
              <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SignUp;
