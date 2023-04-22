import React from 'react'
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from 'axios'
//const axios =require('axios');

function Post() {
       let {id}= useParams()    
       const [postObject,setPostObject]=useState({})
       // initiallising postObject as empty object


       // IMPORTANT since useEffect needs to know when to do too if you dont pass 
       //empty object so that it does not go to infinite loop \
       //note axios doesnt use dynamic id thing 

       //When passing a dynamic route with a parameter to Axios, you should use the syntax /:id to represent the dynamic part of the URL. The colon (:) in /:id indicates that "id" is a parameter that will be replaced with a specific value when the request is made

        // When you make a request to this endpoint, you would replace :id with the actual ID value of the user you want to retrieve, like this:

       useEffect(()=>{
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((res)=>{
                setPostObject(res.data)
        })
           },{})



        return(
                <div className='c_Post'>
<div className='title'>{postObject.title}</div>
<div className='postText'>{postObject.postText}</div>
<div className='usernaame'>{postObject.usernaame}</div>             
  </div> 

        )}
export default Post
