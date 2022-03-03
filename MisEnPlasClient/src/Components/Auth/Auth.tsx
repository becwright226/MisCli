import * as React from 'react';
import { Component } from 'react';
import { Container } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
import './style.scss'

interface AuthProps {
    updateLocalStorage: (newToken: string) => void
}
 
interface AuthState {
    
}
 
class Auth extends React.Component<AuthProps, AuthState> {
  // constructor(props: AuthProps) {
     //   super(props);
       // this.state = { :  };
  // }
    render() { 
        return ( 
        <Container>
            <h3>Hello from Auth</h3>
           <Signup updateLocalStorage={this.props.updateLocalStorage} />
           <Login updateLocalStorage={this.props.updateLocalStorage}/>
        </Container> );
    }
}
 
export default Auth;