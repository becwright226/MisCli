import * as React from 'react';
import { Component } from 'react';
import { Container, Form } from 'reactstrap';
import Login from './Login';
import AuthBar from './Navbar/AuthNav';
import Signup from './Signup';
import './Auth.css'
import AuthMain from './Navbar/AuthMain';

interface AuthProps {
    updateLocalStorage: (newToken: string) => void
}
 
interface AuthState {
  isLogin: boolean
}
 
class Auth extends React.Component<AuthProps, AuthState> {
  constructor(props: AuthProps) {
     super(props);
      this.state = {
       isLogin: true
       };
       this.changeState = this.changeState.bind(this)
  }
  changeState = () => {
    this.setState({
      isLogin: !this.state.isLogin
   })
 }
    render() { 
      const {isLogin} = this.state;
        return ( 
          <div>
            {/*<AuthMain updateLocalStorage={this.props.updateLocalStorage}/>*/}
      
           {!isLogin ? (
              <Login updateLocalStorage={this.props.updateLocalStorage}/>
           ):(
            <Signup updateLocalStorage={this.props.updateLocalStorage} />
           )
           }


        </div> 
        );
    }
}
 
export default Auth;