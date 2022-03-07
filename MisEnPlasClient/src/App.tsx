import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import Auth from './Components/Auth/Auth'
import { useState, useEffect } from 'react';
import Main from './Components/Navbar/Main';
import Footer from './Components/Footer/Footer';
import AuthMain from './Components/Auth/Navbar/AuthMain';
import Post from './Components/Post/PostCreate';
 


const App = () => {
  const [token, setToken] = useState<string | null>('');




  useEffect(() => {
    if (localStorage.getItem('token')){
      setToken(localStorage.getItem("token"))
    }
  }, []);
  
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
            
            <Main token={token} clearLocalStorage={clearLocalStorage} />
          )}
  
   </>
  
  )
}

export default App