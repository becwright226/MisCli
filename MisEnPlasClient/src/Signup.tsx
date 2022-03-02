import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            role: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch("http://localhost:2206/user/register", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        }) 
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem quaerat quos voluptatum perferendis. Distinctio culpa iste atque blanditiis placeat qui ipsa?</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="username">First Name</Label>
                        <Input id="li_username" type="text" name="firstname" placeholder="enter first name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Last Name</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter last name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Email</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Role</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Login;