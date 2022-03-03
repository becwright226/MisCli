import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './style.scss'

interface SignupProps {
    updateLocalStorage: (newToken: string) => void
}
 
interface SignupState {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string
}

class Signup extends Component <SignupProps, SignupState> {

    constructor(props: SignupProps) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            role: 'BOH'
        };
    }

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const requestObject = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
        }
        try{
          
        const res= await fetch("http://localhost:2206/user/register", {
           
            method: 'POST',
            body: JSON.stringify(requestObject),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        })
        const data =await res.json()
        this.props.updateLocalStorage(data.token)
    
           this.setState({
              firstName:'',
                lastName:'', 
              email:'',
              password:'', 
              role: 'BOH'
           })
        } catch (error) {
            console.log({error})
        }      
         
      
    }

    render() {
        return (
            <div>
                <h1>Signup</h1>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="firstname">First Name</Label>
                        <Input id="li_firstname" type="text" name="firstname" placeholder="enter first name" onChange={(e:any) => this.setState({firstName: e.target.value})} value={this.state.firstName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Last Name</Label>
                        <Input id="li_lastname" type="text" name="lastname" placeholder="enter last name" onChange={(e:any) => this.setState({lastName: e.target.value})} value={this.state.lastName} />
                    </FormGroup>
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
                        <option > FOH </option>
                        <option > Admin </option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" className="btn" > Submit </Button>
                </Form>
            </div>
        )
    }
}

export default Signup;