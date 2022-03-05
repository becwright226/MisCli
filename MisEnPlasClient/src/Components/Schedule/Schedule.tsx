import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import SchedIndex from './SchedIndex';

interface SchedCreateProps {
  token: string  
  
}
 
interface SchedCreateState {
    date: string,
    task: string,
    desc: string,
    empAssign?: string
}


 
class SchedCreateIndex extends Component<SchedCreateProps, SchedCreateState> {
    constructor(props: SchedCreateProps) {
        super(props);
        this.state = { 
            date: '',
            task: '',
            desc: '',
            empAssign: ''
        }
    }
        
        handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
                const requestObject = {
                  date: this.state.date,
                  task: this.state.task,
                  desc: this.state.desc,
                  empAssign: this.state.empAssign
                } 
                try {
                    const res = await fetch('http://localhost:2206/schedule/', {
                    method: 'POST',
                    body: JSON.stringify(requestObject),
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': this.props.token
                      })
                    })
                    const data = await res.json()

                    this.setState({
                        date: '',
                        task: '',
                        desc: '',
                        empAssign: ''
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
                        <Label for="date">Date</Label>
                        <Input id="li_date" type="date" name="date" placeholder="enter the date" onChange={(e:any) => this.setState({date: e.target.value})} value={this.state.date} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="task">Task</Label>
                        <Input id="li_task" type="text" name="task" placeholder="ex. Morning Prep" onChange={(e:any) => this.setState({task: e.target.value})} value={this.state.task} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="desc">Description</Label>
                        <Input id="li_desc" type='textarea' name="desc" placeholder="ex. 2 bags onions, 3 case bacon, 8 qts tomato" onChange={(e:any) => this.setState({desc: e.target.value})} value={this.state.desc} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="empAssign">Employee Assignment</Label>
                        <Input id="li_empAssign" type='text' name="empAssign" placeholder="ex. Phil, morning crew, etc." onChange={(e:any) => this.setState({empAssign: e.target.value})} value={this.state.empAssign}> 
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
 
export default SchedCreateIndex;
