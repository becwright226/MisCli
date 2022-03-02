import * as React from 'react';
import { Component } from 'react';
import { Container } from 'reactstrap';
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
        </Container> );
    }
}
 
export default Auth;