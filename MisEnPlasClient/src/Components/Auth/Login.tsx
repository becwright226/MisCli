import * as React from 'react';
import { Component } from 'react';


 
interface LoginProps {
    
}
 
interface LoginState {
    
}
 
class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return ( <div> Hello from Login</div> );
    }
}
 
export default Login;