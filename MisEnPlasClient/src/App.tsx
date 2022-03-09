import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import Auth from './Components/Auth/Auth'
import { useState, useEffect } from 'react';
import Main from './Components/Navbar/Main';
import Footer from './Components/Footer/Footer';
import AuthMain from './Components/Auth/Navbar/AuthMain';
import Post from './Components/Post/PostCreate';
import { userInfo } from 'os';
import { request } from 'http';
 


const App = () => {
  const [token, setToken] = useState<string | null>('');
  const [role, setRole] = useState<string | null>('');



  useEffect(() => {
    if (localStorage.getItem('token')){
      setToken(localStorage.getItem("token"))
    }
  }, []);
  
  // useEffect(() => {
  //   if (req.user.role==='admin') => {
  //     (localStorage.getItem('role')) {
  //       setRole(localStorage.getItem("role"))}
  //   }
  // }, []);

  const adminRoute = (newRole: 'admin') => {
    localStorage.setItem('role', newRole);
    setRole(newRole)

  }

  const bohRoute = (newRole: 'boh') => {
    localStorage.setItem('role', newRole);
    setRole(newRole)

  }

  const fohRoute = (newRole: 'foh') => {
    localStorage.setItem('role', newRole);
    setRole(newRole)

  }

  const updateLocalStorage = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setToken(newToken)
  }



  const clearLocalStorage = () => {
    localStorage.clear();
    setToken('')
  }

  return (

     <>
     {!token ? (
           <AuthMain updateLocalStorage={updateLocalStorage}  />  
          ):(
            
            <Main token={token}  clearLocalStorage={clearLocalStorage} />
          )}
  
   </>
  
  )
}

export default App