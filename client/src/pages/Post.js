import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../helper/AuthContext";

function Post() {
  // nothing is passed onto params hook
  // name has to be same as that of dynamic address
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { authState } = useContext(AuthContext);
  // initiallising postObject as empty object

  // IMPORTANT since useEffect needs to know when to do too if you dont pass
  //empty object so that it does not go to infinite loop \
  //note axios doesnt use dynamic id thing

  //When passing a dynamic route with a parameter to Axios, you should use the syntax /:id to represent the dynamic part of the URL. The colon (:) in /:id indicates that "id" is a parameter that will be replaced with a specific value when the request is made

  // When you make a request to this endpoint, you would replace :id with the actual ID value of the user you want to retrieve, like this:

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });

    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const addComment = () => {
    axios
      .post(
        "http://localhost:3001/comments",
        {
          commentBody: newComment,
          PostId: id,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) alert(response.data.error);
        else {
          const username = response.data.username;
          const commentToAdd = { commentBody: newComment, username: username };

          setComments([...comments, commentToAdd]);
          setNewComment("");
        }
      });

    // refresh needed after deleting posts
    window.location.reload();
  };

  const deleteComment = (id) => {
    axios
      .delete(`http://localhost:3001/comments/${id}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then(() => {
        setComments(
          comments.filter((val) => {
            return val.id != id;
          })
        );
      });
  };

  return (
    <div className="postContainer">
      <div className="left-side">
        <div className="c_Post">
          <div className="title">{postObject.title}</div>
          <div className="postText">{postObject.postText}</div>
          <div className="usernaame">{postObject.usernaame}</div>
        </div>
      </div>

      <div className="right-side">
        <div className="addNewComment">
          <input
            type="text"
            placeholder="Comment..."
            className="postInput"
            onChange={(e) => {
              setNewComment(e.target.value);
            }}></input>
          <button className="postButton" onClick={addComment}>
            Add comment
          </button>
        </div>
        <div className="listOfComments">
          {comments?.map((comment, key) => {
            return (
              <div key={key} className="comment">
                <label htmlFor=""> Comment:</label> {comment?.commentBody}
                <div className="username-div">
                  <label htmlFor="">Username:</label>
                  {comment?.username}
                  {authState.username === comment?.username && (
                    <button
                      className="deleteButton"
                      onClick={() => {
                        deleteComment(comment?.id);
                      }}>
                      {" "}
                      X{" "}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Post;
