import { stringify } from 'querystring';
import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

interface OrderCreateProps {
   token: string 
}
 
interface OrderCreateState {
  date: string,
  itemCount: number,
  desc: string,
  isEvent: boolean,
  eventName?: string,
  cost: number  
}
 
class OrderCreate extends Component<OrderCreateProps, OrderCreateState> {
    constructor(props: OrderCreateProps) {
        super(props);
        this.state = { 
            date: '',
            itemCount: 0,
            desc: '',
            isEvent: false,
            eventName: '',
            cost: 0 
        };
    }

    handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const requestObject = {
            date: this.state.date,
            itemCount: this.state.itemCount,
            desc: this.state.desc,
            isEvent: this.state.isEvent,
            eventName: this.state.eventName,
            cost: this.state.cost
        }
        try {
            const res = await fetch('http://localhost:2206/order/', {
                method: 'POST',
                body: JSON.stringify(requestObject),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.token
                })
            })
            const data = await res.json()
        } catch (error) {
            console.log(error)
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
                        <Label for="title">Item Count</Label>
                        <Input id="li_title" type="text" name="title" placeholder="enter a title for your post" onChange={(e:any) => this.setState({title: e.target.value})} value={this.state.title} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Description</Label>
                        <Input id="li_content" type='textarea' name="content" placeholder="make your announcement" onChange={(e:any) => this.setState({content: e.target.value})} value={this.state.content} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="role">Is there an event this week?</Label>
                        <Input id="li_role" type='select' name="role"  onChange={(e:any) => this.setState({isEvent: e.target.value})} value={this.state.isEvent}> 
                        <option> true </option>
                        <option > false </option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" className="btn" > Submit </Button>
            </Form>
          
            </>
         );
    }
}
 
export default OrderCreate;