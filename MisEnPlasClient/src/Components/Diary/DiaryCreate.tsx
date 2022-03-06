import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';


interface DiaryCreateProps {
    token: string
}
 
interface DiaryCreateState {
 date: string,
 title: string,
 content: string
}
 
class DiaryCreate extends Component<DiaryCreateProps, DiaryCreateState> {
    constructor(props: DiaryCreateProps) {
        super(props);
        this.state = { 
            date: '',
            title: '',
            content: ''
          };
    }

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()
       const requestObject = {
           date: this.state.date,
           title: this.state.title,
           content: this.state.content,
       } 
       try {
           const res = await fetch('http://localhost:2206/diary/', {
               method: 'POST',
               body: JSON.stringify(requestObject),
               headers: new Headers({
                   'Content-Type': 'application/json',
                   'Authorization': this.props.token
               })
           })
           const data = await res.json()
           console.log(data)
           this.setState({
           date: '',
           title: '',
           content: ''
         })
          
       } catch (error) {
           console.log({error})
       }
    }
    render() { 
        return (  
            <>
       
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                        <Label for="date"> Date </Label>
                        <Input id="li_date" type='date' name="date" placeholder="00/00/0000" onChange={(e:any) => this.setState({date: e.target.date})} value={this.state.date} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title"> Entry Title </Label>
                        <Input id="li_title" type="text" name="title" placeholder="ex. First day on floor" onChange={(e:any) => this.setState({title: e.target.value})} value={this.state.title}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="content"> Content </Label>
                        <Input id="li_content" type='textarea' name="content" placeholder="Write about your day, these thoughts are only for your eyes" onChange={(e:any) => this.setState({content: e.target.value})} value={this.state.content}/>
                    </FormGroup>
                    <Button type="submit" className="btn" > Submit </Button>
            </Form>
      
        </>
       );
    }
}
 
export default DiaryCreate;