import React, { useState, useEffect } from 'react';
import { 
    
    Container,
    Row,
    Col,
    Form,
    Button,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import {Route, Link, Routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';

interface PostCreateProps {
    token: string
}
 
interface PostCreateState {
    date: string;
    title: string;
    content: string;
    role: string
    
}
 
class Post extends React.Component<PostCreateProps, PostCreateState> {
    constructor(props: PostCreateProps) {
        super(props);
        this.state = { 
            date: '', 
            title: '',
            content: '',
            role: 'All Staff'
        };
    }

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const requestObject = {
            date: this.state.date,
            title: this.state.title,
            content: this.state.content,
            role: this.state.role,
        } 
        try {
            const res = await fetch('http://localhost:2206/post/', {
                method: 'POST',
            body: JSON.stringify(requestObject),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
            })
            const data = await res.json()
           
        } catch (error) {
            console.log({error})
        }
    }

    render() { 
        return ( 
            <>
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                        <Label for="date">Date</Label>
                        <Input id="li_date" type="date" name="date" placeholder="enter the date" onChange={(e:any) => this.setState({date: e.target.value})} value={this.state.date} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input id="li_title" type="text" name="title" placeholder="enter a title for your post" onChange={(e:any) => this.setState({title: e.target.value})} value={this.state.title} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Content</Label>
                        <Input id="li_content" type='textarea' name="content" placeholder="make your announcement" onChange={(e:any) => this.setState({content: e.target.value})} value={this.state.content} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="role">Role</Label>
                        <Input id="li_role" type='select' name="role" placeholder="enter role" onChange={(e:any) => this.setState({role: e.target.value})} value={this.state.role}> 
                        <option> BOH </option>
                        <option > FOH </option>
                        <option > All Staff </option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" className="btn" > Submit </Button>
            </Form>
          
            </>
         );
    }
}
 
export default Post;


