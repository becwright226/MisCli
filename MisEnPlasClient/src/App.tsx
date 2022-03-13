import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Auth from "./Components/Auth/Auth";
import { useState, useEffect } from "react";
import Main from "./Components/Navbar/Main";
import AuthMain from "./Components/Auth/Navbar/AuthMain";
import Post from "./Components/Post/PostCreate";
import { userInfo } from "os";
import { request } from "http";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import OrderDelete from "./Components/Order/OrderDelete";
import OrderIndex from "./Components/Order/OrderIndex";
import Recipe from "./Components/Recipe/RecipeIndex";
import Diary from "./Components/Diary/DiaryIndex";
import Sched from "./Components/Schedule/SchedIndex";
import SiteBar from "./Components/Navbar/Navbar";
import UserNav from "./Components/Footer/FooterNav";

const App = () => {
  const [token, setToken] = useState<string | null>("");
  const [role, setRole] = useState<string | null>("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    if (localStorage.getItem("role")) {
      setRole(localStorage.getItem("role"));
    }
  }, []);

  const updateLocalStorage = (newToken: string, newRole: string) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("role", newRole);
    setToken(newToken);
    setRole(newRole);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setToken("");
  };

  const protectedViews = () => {
    return (token === localStorage.getItem('token') ? 
    <Main clearLocalStorage={clearLocalStorage} token={token as string} updateLocalStorage={updateLocalStorage}/>
    :  <AuthMain updateLocalStorage={updateLocalStorage}  clearLocalStorage={clearLocalStorage} token={token as string}/> )
  }


  return (




  <>
  {/* <UserNav  clearLocalStorage={clearLocalStorage} token={token} updateLocalStorage={updateLocalStorage} /> */}
  
  {protectedViews()}
    </>

  





    
  );
};

export default App;
