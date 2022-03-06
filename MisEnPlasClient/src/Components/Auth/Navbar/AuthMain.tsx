import * as React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import Signup from '../Signup';
import Login from '../Login';
import Nav from './AuthNav'
import Auth from '../Auth';
import '../Auth.css'

interface AuthMainProps {
updateLocalStorage: (newToken: string) => void
}
 

 
class AuthMain extends Component<AuthMainProps> {
    constructor(props: AuthMainProps) {
        super(props);
      //  this.state = { :  };
    }
    render() { 
        return (
        
        <React.Fragment>
            <Router>
              <Nav updateLocalStorage={this.props.updateLocalStorage} />
                <Routes>
                    <Route path="/" element={ <Auth updateLocalStorage={this.props.updateLocalStorage} /> } />
                    <Route path="/signup" element={ <Auth updateLocalStorage={this.props.updateLocalStorage} /> } />
                    <Route path="/login" element={ <Login updateLocalStorage={this.props.updateLocalStorage} /> } />
                </Routes>
            </Router>
        </React.Fragment>  
        );
    }
}
 
export default AuthMain;
