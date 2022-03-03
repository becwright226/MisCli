import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import Auth from './Components/Auth/Auth'
import { useState, useEffect } from 'react';
import SiteBar from './Components/Navbar/Navbar';




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
    <SiteBar/> 
    <Container className='App'>
       
      <Row>
      <Col>
      <Auth updateLocalStorage={updateLocalStorage} />
      <div>
        <Button onClick={clearLocalStorage}> Logout </Button>
      </div>
      </Col>
      </Row>
    </Container>
    </>
  )
}

export default App