import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

interface ComCreateProps {
    token: string
}
 
interface ComCreateState {
   date: string,
   content: string 
}
 
class ComCreate extends Component<ComCreateProps, ComCreateState> {
    constructor(props: ComCreateProps) {
        super(props);
       this.state = { 
           date: '',
           content: '' 
         };
    }

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const requestObject = {
            date: this.state.date,
            content: this.state.content
        } 
        try {
            const res = await fetch('http://localhost:2206/:postId', {
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
                        <Label for="content">Content</Label>
                        <Input id="li_content" type='textarea' name="content" placeholder="make your announcement" onChange={(e:any) => this.setState({content: e.target.value})} value={this.state.content} />
                    </FormGroup>
                    <Button type="submit" className="btn" > Submit </Button>
            </Form>
          
            </>
        );
    }
}
 
export default ComCreate;