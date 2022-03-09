import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Auth from "./Components/Auth/Auth";
import { useState, useEffect } from "react";
import Main from "./Components/Navbar/Main";
import Footer from "./Components/Footer/Footer";
import AuthMain from "./Components/Auth/Navbar/AuthMain";
import Post from "./Components/Post/PostCreate";
import { userInfo } from "os";
import { request } from "http";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";

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

  return (
    <>
    <Routes>

      <Route path="/efa" element={<Navigate replace to="/" />} />
      <Route
        path="/"
        element={
          !token ? (
            <Auth updateLocalStorage={updateLocalStorage} />
          ) : (
            <Navigate to="/main" replace/> 
          )
        }
      />
      <Route
        path="/signup"
        element={<>
        <AuthMain updateLocalStorage={updateLocalStorage}  />
        <Signup updateLocalStorage={updateLocalStorage} />
        </>}
      />
      <Route
        path="/login"
        element={
          <> {!token ? <>
            <Login updateLocalStorage={updateLocalStorage} /> </>
    : <Navigate to="/main" replace/>      
          }
          </>
        }
      />
          <Route
        path="/main"
        element={ token? <Main clearLocalStorage={clearLocalStorage} token={token as string}  /> : <Navigate to='/login'replace/>
          
        }
      />
    </Routes>
    </>
  );
};

export default App;
