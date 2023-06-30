import "./App.css";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { useState, useEffect } from "react";
import { AuthContext } from "./helper/AuthContext";
import axios from "axios";
// this is what is rendered in web browser

// REMEBER ALL THESE JAVASCRIPT FUCNTIONS ARE USED OUTSIDE THE RETURN FUNCTION

// we use useEffect so that we data after refreshing the page
// inside the get pass url for gest request

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/verify", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        if (res.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: res.data.username,
            id: res.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>
        <div className="nav">
          <Link to="/createPost">
            <button> New Post </button>
          </Link>

          <Link to="/home">
            {" "}
            <button>Home</button>
          </Link>

          {!authState.status ? (
            <>
              <Link to="/login">
                <button>Login</button>{" "}
              </Link>
              <Link to="/registration">
                <button>Sign Up</button>
              </Link>
            </>
          ) : (
            <>
            <button onClick={logout}>Log Out</button>
            <h1> {authState.username}</h1>
            </>
          )}

         
        </div>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            exact
            path="/createPost"
            element={<CreatePost></CreatePost>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route
            exact
            path="/registration"
            element={<Registration></Registration>}></Route>

          <Route exact path="/post/:id" element={<Post />}></Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
