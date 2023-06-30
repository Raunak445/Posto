import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";
const validationSchema = Yup.object().shape({
  username: Yup.string().min(3).max(15).required(),
  password: Yup.string().min(3).max(20),
});
const initialValues = {
  username: "",
  password: "",
};
const onSubmit = (data) => {
  axios.post("http://localhost:3001/auth", data).then(() => {
    console.log("New User Signed Up ");
  });

  // navigate("/");
};

function Registration() {
  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        className="container">
        <Form className="flex-outer">
          <label>Username</label>
          <ErrorMessage name="username" component="span"></ErrorMessage>
          <Field
            id="inputCreatePost"
            name="username"
            className="container"></Field>

          <label>Password</label>
          <ErrorMessage name="password" component="span"></ErrorMessage>
          <Field
            id="inputCreatePost"
            name="password"
            className="container"></Field>

          <button type="submit" className="button">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
