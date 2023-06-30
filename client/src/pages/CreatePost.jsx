import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { useState, userEfffect } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [listOfPosts, setListOfPosts] = useState([]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    usernaame: Yup.string().min(3).max(15).required(),
  });
  const initialValues = {
    title: "",
    postText: "",
    usernaame: "",
  };

  // formik automatically passes the data as an argument
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data);

    navigate("/");
  };

  // we dont have to send empty array in post

  let navigate = useNavigate();

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        className="container">
        <Form className="flex-outer">
          <label>Title</label>
          <ErrorMessage name="title" component="span"></ErrorMessage>
          <Field
            id="inputCreatePost"
            name="title"
            className="container"></Field>

          <label>Post Text</label>
          <ErrorMessage name="postText" component="span"></ErrorMessage>
          <Field id="inputCreatePost" name="postText" className="post"></Field>

          <label>Username</label>
          <ErrorMessage name="usernaame" component="span"></ErrorMessage>
          <Field
            id="inputCreatePost"
            name="usernaame"
            className="container"></Field>

          <button type="submit" className="button">
            {" "}
            Create Post
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
