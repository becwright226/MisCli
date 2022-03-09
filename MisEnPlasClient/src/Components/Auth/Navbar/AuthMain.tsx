import * as React from 'react';
import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import Signup from '../Signup';
import Login from '../Login';
import Nav from './AuthNav'
import Auth from '../Auth';
import '../Auth.css'

interface AuthMainProps {
updateLocalStorage: (newToken: string, newRole: string) => void

}
 

 
class AuthMain extends Component<AuthMainProps> {
    constructor(props: AuthMainProps) {
        super(props);
      //  this.state = { :  };
    }
    render() { 
        return (
        
        <React.Fragment>
           
              <Nav updateLocalStorage={this.props.updateLocalStorage} />
               
               
               
           
        </React.Fragment>  
        );
    }
}
 
export default AuthMain;
