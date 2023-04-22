import React from 'react'
import axios from "axios" 

import { useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom'


function Home() {



let navigate =useNavigate()



        
const [listOfPosts,setListOfPosts] =useState([]) 
// empty in the beginning 
  
  useEffect(()=>
{

axios.get("http://localhost:3001/posts").then((res)=>{
  setListOfPosts(res.data)

})
},[])




  return (
    <div>
    
    
    <div className='align'>




    {listOfPosts.map((value,key)=>{
      return(
    // in navigate we dont need to push we just pass it as function
        <div className='Post' onClick={()=>{navigate(`/post/${value.id}`)}}>
          <div className='title'> {value.title}</div>
          <div className='postText'>{value.postText}</div>
          <div className='usernaame'>{value.usernaame}</div>
        </div>
    
    
    
    
    
      
      )
    
    })  
    }
    
    </div>
    
    
    </div>
  )
}

export default Home
