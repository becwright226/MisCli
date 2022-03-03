import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Style.scss'
import AuthImg from '../../assets/misAuthBkg.jpeg'


interface LoginProps {
    updateLocalStorage: (newToken: string) => void
}
 
interface LoginState {
    email: string,
    password: string,
    role: string
}

class Login extends Component <LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props)
        this.state = {
            email: '',
            password: '',
            role: ''
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
            console.log(data)
            this.setState({
                email:'',
                password:'', 
                role: ''
            })
            
        }) 
      
    }

    render() {
        return (
            <div className="base-container mb-4" >
                <h1 className="header">Login</h1>
                <div className="content">
                 
                </div>
                <Form onSubmit={this.handleSubmit} className="form mt-4" style={{background:'gray', width:'60%', borderRadius:'4px'}}>
                    <FormGroup className="form-group">
                        <Label className="label m-2" for="email" style={{fontFamily:'Times', color:'darkred'}}>Email:</Label>
                        <Input style={{background:'beige', fontFamily:'Times', border:'0', borderRadius: '4px', marginBottom:'31px', transition:'all 250ms ease-in-out', width:'97%'}}  className="input m-2" type="email" name="email" placeholder="enter email" onChange={(e:any) => this.setState({email: e.target.value})} value={this.state.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label style={{fontFamily:'Times', color:'darkred'}} className="label m-2" for="password">Password:</Label>
                        <Input style={{background:'beige', fontFamily:'Times', border:'0', borderRadius: '4px', marginBottom:'31px', transition:'all 250ms ease-in-out', width:'97%'}} className="input m-2" type="password" name="password" placeholder="enter password" onChange={(e:any) => this.setState({password: e.target.value})} value={this.state.password} />
                    </FormGroup>
                    <FormGroup>
                        <Label style={{fontFamily:'Times', color:'darkred'}} className="label m-2" for="role">Role:</Label>
                        <Input style={{background:'beige', fontFamily:'Times', border:'0', borderRadius: '4px', marginBottom:'31px', transition:'all 250ms ease-in-out', width:'97%'}} className="input m-2" type='select' name="role" placeholder="enter password" onChange={(e:any) => this.setState({role: e.target.value})} value={this.state.role}> 
                        <option> BOH </option>
                        <option> FOH </option>
                        <option> Admin </option>
                        </Input>
                    </FormGroup>
                    <div className="text-center m-4"> <Button type="submit" className="btn-lg m-2" style={{background:'darkred', fontFamily:'Times'}}> Login </Button></div>
                </Form>
            </div>
        )
    }
}

export default Login;