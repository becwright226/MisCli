import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


interface LoginProps {
  
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
            body: JSON.stringify({requestObject}),
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
            <div className="base-container">
                <h1 className="header">Login</h1>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="li_email" type="email" name="email" placeholder="enter password" onChange={(e:any) => this.setState({email: e.target.value})} value={this.state.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={(e:any) => this.setState({password: e.target.value})} value={this.state.password} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Role</Label>
                        <Input id="li_password" type='select' name="role" placeholder="enter password" onChange={(e:any) => this.setState({role: e.target.value})} value={this.state.role}> 
                        <option> BOH </option>
                        <option> FOH </option>
                        <option> Admin </option>
                        </Input>
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Login;