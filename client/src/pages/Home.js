import React from "react";
import axios from "axios";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();


  const [listOfPosts, setListOfPosts] = useState([]);
  //const [likedPosts, setLikedPosts] = useState([]);

  // empty in the beginning

  
  // useEffect(() => {
  //   // Refresh logic
  // }, [props.refresh]);


  useEffect(() => {
    axios
      .get("http://localhost:3001/posts", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setListOfPosts(res.data);
        console.log(res.data);

        // setLikedPosts(res.data.likedPosts.map((like)=>{
        //   return like.PostId
        // }))
      });
     

  }, []);

  // const likedAPost=(postId)=>{
  //   axios.post("http://localhost:3001/likes",{
  //     PostId:postId
  //   },{
  //     headers:{
  //       accessToken:localStorage.getItem("accessToken")
  //     }
  //   }
  //   ).then((res)=>{
  //     setListOfPosts(
  //       listOfPosts.map((post)=>{
  //         if(post.id==postId){
  //           if(res.data.liked){

  //             return {...post,Likes:[post.Likes,0]}
  //           }

  //           else{
  //             const likesArray=post.Likes;
  //               likesArray.pop();
  //               return {...post,Likes:likesArray}
  //           }
  //         }

  //         else {
  //           return post
  //         }

  //       })
  //     )
  //   })
  // }

  return (
    <React.StrictMode>
    <div>
      <div className="align">
        {listOfPosts?.map((value, key) => {
          return (
            // in navigate we dont need to push we just pass it as function
            <div
              className="Post"
              key={key}
              onClick={() => {
                navigate(`/post/${value.id}`);
              }}>
              <div className="title"> {value.title}</div>

              <div className="postText">{value.postText}</div>

              {/* <div className='footer'> */}
              {/* className='usernaame' */}
              <div className="usernaame">{value.usernaame}</div>
              {/* <div> */}
              {/* <ThumbUpAltIcon onClick={()=>{
              likedAPost(value.id)
          }}
          className={likedPosts.includes(value.id)?"unlikeButtn":"likeBttn"}/>
         </div> */}
              {/* 
         </div> */}
            </div>
          );
        })}
      </div>
    </div>
    </React.StrictMode>
  );
}

export default Home;
