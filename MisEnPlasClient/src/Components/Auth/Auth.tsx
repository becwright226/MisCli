import * as React from 'react';
import { Component } from 'react';
import { Container } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';


interface AuthProps {
    
}
 
interface AuthState {
    
}
 
class Auth extends React.Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);
       // this.state = { :  };
    }
    render() { 
        return ( 
        <Container>
           <Signup />
           <Login />
        </Container> );
    }
}
 
export default Auth;