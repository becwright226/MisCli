import * as React from 'react';
import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import Signup from '../Signup';
import Login from '../Login';
import Nav from '../../Footer/FooterNav'
import Auth from '../Auth';
import '../Auth.css'

interface AuthMainProps {
updateLocalStorage: (newToken: string, newRole: string) => void
clearLocalStorage: () => void
token: string

}
 

 
class AuthMain extends Component<AuthMainProps> {
    constructor(props: AuthMainProps) {
        super(props);
      //  this.state = { :  };
    }
    render() { 
        return (
        
        <React.Fragment>
           
              <Nav token={this.props.token} clearLocalStorage={this.props.clearLocalStorage} updateLocalStorage={this.props.updateLocalStorage} />
               
              <Routes>
                    {/* <Route path="/" element={ <Login updateLocalStorage={this.props.updateLocalStorage}  token={this.props.token} clearLocalStorage={this.props.clearLocalStorage}/> } /> */}

                    <Route path="/" element={ <> {!this.props.token ? <><Login clearLocalStorage={this.props.clearLocalStorage} updateLocalStorage={this.props.updateLocalStorage} token={this.props.token}/> </> : <Navigate to="/main" replace/>}</> } />

                    <Route path="/login" element={ <> {!this.props.token ? <><Login clearLocalStorage={this.props.clearLocalStorage} updateLocalStorage={this.props.updateLocalStorage} token={this.props.token}/> </> : <Navigate to="/main" replace/>}</> } />

                    <Route path="/signup" element={ <> {!this.props.token ? <><Signup clearLocalStorage={this.props.clearLocalStorage} updateLocalStorage={this.props.updateLocalStorage} token={this.props.token}/> </> : 
                    <Navigate to="/main" replace/>}</> } />



                    {/*   */}
                </Routes> 
               
           
        </React.Fragment>  
        );
    }
}
 
export default AuthMain;
