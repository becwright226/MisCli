import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Auth.css'

interface SignupProps {
    updateLocalStorage: (newToken: string, newRole: string) => void
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
        this.props.updateLocalStorage(data.token, data.user.role)
    
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
            <div className="auth-main p-4">
                <Form onSubmit={this.handleSubmit} className="auth-form p-5" >
                <h1>Signup</h1>
                    <FormGroup>
                        <Label for="firstname">First Name</Label>
                        <Input className="input" style={{backgroundColor:'burlywood', width:'75%'}} type="text" name="firstname" placeholder="enter first name" onChange={(e:any) => this.setState({firstName: e.target.value})} value={this.state.firstName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Last Name</Label>
                        <Input className="input-md"  style={{backgroundColor:'burlywood',width:'75%' }} type="text" name="lastname" placeholder="enter last name" onChange={(e:any) => this.setState({lastName: e.target.value})} value={this.state.lastName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input className="input-md" style={{backgroundColor:'burlywood',width:'75%'}} type="email" name="email" placeholder="enter password" onChange={(e:any) => this.setState({email: e.target.value})} value={this.state.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="password">Password</Label>
                        <Input className="input-md" style={{backgroundColor:'burlywood',width:'75%'}} type="password" name="password" placeholder="enter password" onChange={(e:any) => this.setState({password: e.target.value})} value={this.state.password} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="role">Role</Label>
                        <Input className="input-md" type='select' name="role" style={{backgroundColor:'burlywood',width:'75%'}} placeholder="enter password" onChange={(e:any) => this.setState({role: e.target.value})} value={this.state.role}> 
                        <option style={{backgroundColor:'burlywood'}}> BOH </option>
                        <option style={{backgroundColor:'burlywood'}}> FOH </option>
                        <option style={{backgroundColor:'burlywood'}}> Admin </option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" className="btn" > Submit </Button>
                    <br/>
                    <p><a href="/login">Already a user? Sign-in</a></p>
                </Form>
            </div>
        )
    }
}

export default Signup;