 import './App.css';
import {Route,Routes,BrowserRouter as Router,Link} from "react-router-dom"
import Home from "./pages/Home"
 import CreatePost from './pages/CreatePost'
import Post from './pages/Post';
 
// this is what is rendered in web browser 

// REMEBER ALL THESE JAVASCRIPT FUCNTIONS ARE USED OUTSIDE THE RETURN FUNCTION


// we use useEffect so that we data after refreshing the page 
// inside the get pass url for gest request



function App() {



  return(

<Router>
<div className='nav'>
<Link to ="/createPost">Create a Post 
</Link>


<Link  to ="/home"> Home
  
  </Link>

<Link to ='/post'>Post</Link>
</div>
<Routes>
<Route path="/home" element={<Home />}></Route>
<Route exact path ="/createPost" element={<CreatePost></CreatePost>}> </Route>
<Route exact path="/post/:id" element={<Post/>}> </Route>



</Routes>



</Router>









  )






}

export default App;


