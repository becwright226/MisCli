import React, { Component, useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Auth.css'
import AuthMain from "./Navbar/AuthMain";
import NavigationHelper from "./NavigateHelper";

interface LoginProps {
    updateLocalStorage: (newToken: string, newRole: string) => void
  
}
 
interface LoginState {
    email: string,
    password: string,
    role: string
    path: string
}

class Login extends Component <LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props)
        this.state = {
            email: '',
            password: '',
            role: '',
            path: ""
        };
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const requestObject = {
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        }
        fetch("http://localhost:2206/user/login", {
            method: 'POST',
            body: JSON.stringify(requestObject),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.updateLocalStorage(data.token, data.user.role)
            
        }) 
      
    }


    render() {
        return (
            <>
            <NavigationHelper path={this.state.path}></NavigationHelper>
            <AuthMain updateLocalStorage={this.props.updateLocalStorage} />
            <div className="auth-main p-4 text-center">
                <Form onSubmit={this.handleSubmit} className="auth-form p-5 flex">
                <h1>Login</h1>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input style={{backgroundColor:'burlywood', width:'75%'}} className="input" type="email" name="email" placeholder="enter email" onChange={(e:any) => this.setState({email: e.target.value})} value={this.state.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="password">Password</Label>
                        <Input style={{backgroundColor:'burlywood', width:'75%'}} className="input" type="password" name="password" placeholder="enter password" onChange={(e:any) => this.setState({password: e.target.value})} value={this.state.password} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="role">Role</Label>
                        <Input style={{backgroundColor:'burlywood', width:'75%'}} className="input" type='select' name="role" placeholder="enter password" onChange={(e:any) => this.setState({role: e.target.value})} value={this.state.role}> 
                        <option style={{backgroundColor:'burlywood', width:'75%'}} > BOH </option>
                        <option  style={{backgroundColor:'burlywood', width:'75%'}} > FOH </option>
                        <option style={{backgroundColor:'burlywood', width:'75%'}} > Admin </option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" className="btn" > Submit </Button>
                    <br/>
                    <p><a href="/">New user? Sign-up</a></p>
                </Form>
            </div></>
        )
    }
}

export default Login;

