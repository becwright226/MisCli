import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';

interface PostEditProps {
  token: string
  fetchPosts: object[]
  updatePressed: boolean
  
}
 
interface PostEditState {
  id: string,
  date: string,
 title: string,
 content: string
 role: string
}
 
class PostEdit extends React.Component<PostEditProps, PostEditState> {

    constructor(props: PostEditProps) {
        super(props);
        this.state = { 
            id: '',
            date: '',
            title: '',
            content: '',
            role: ''
         };
    }

    postUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
     
        const requestObject = {
            date: this.state.date,
            title: this.state.title,
            content: this.state.content,
            role: this.state.role,
        } 
        try {
            const res = await
        fetch(`http://localhost:2206/post/${this.state.id}` , {
          method: 'PUT',
          body: JSON.stringify({ requestObject }),
          headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
          })
        }).then((res) => {
            this.props.fetchPosts
            this.props.updatePressed
        })
        
         
        } catch (error) {
            console.log({error})
        }
      }


    render() { 
        return ( 
            <div>
            <Modal isOpen={true} >
                <ModalHeader >Post Update</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.postUpdate}>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input id="date" type="date" name="date" value={this.state.date} placeholder="enter result"  />
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input type="text" name="title" id="title" value={this.state.title} placeholder="Type"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">Content</Label>
                            <Input id="content" type='textarea' name="content" value={this.state.content} placeholder="enter description"  />
                        </FormGroup>
                        <FormGroup>
                        <Label for="role">Role</Label>
                        <Input id="li_role" type='select' name="role" placeholder="enter role" onChange={(e:any) => this.setState({role: e.target.value})} value={this.state.role}> 
                        <option> BOH </option>
                        <option > FOH </option>
                        <option > All Staff </option>
                        </Input>
                    </FormGroup>
                        <Button type="submit" color="primary"> Submit </Button>
                    </Form>
                </ModalBody>

            </Modal>

        </div>
         );
    }
}
 
export default PostEdit;