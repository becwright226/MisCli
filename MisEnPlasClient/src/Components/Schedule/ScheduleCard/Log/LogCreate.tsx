import React, { Component} from 'react';
import { 
    Form,
    Button,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader
} from 'reactstrap';


interface LogCreateProps {
    token: string
    triggerMethod: Function
    schedule: schedData
}

interface schedData {
    id: string,
    date: string,
    task: string,
    desc: string,
    empAssign?: string
    model: boolean
}
 
interface LogCreateState {
    date: string;
    task: string;
    time: number;
    model: boolean

    
}
 
class LogCreate extends Component<LogCreateProps, LogCreateState> {
    constructor(props: LogCreateProps) {
        super(props);
        this.state = { 
            date: '', 
            task: '',
            time: 0,
            model: false
        };
    }

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const requestObject = {
            date: this.state.date,
            task: this.state.task,
            time: this.state.time,
        } 
        try {
            const res = await fetch(`http://localhost:2206/log/${this.props.schedule.id}`, {
                method: 'POST',
                body: JSON.stringify(requestObject),
                headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
            })
            const data = await res.json()
            this.props.triggerMethod()
            this.setState ({ 
                date: '', 
                task: '',
                time: 0,
            })
           
        } catch (error) {
            console.log({error})
        }
    }

    modal = () => {
        this.setState({model: !this.state.model})
    }

    render() { 
        return ( 
            <>
            <Button className='comm-btn m-2' style={{backgroundColor:'#b2d33a', float:'left',color: 'black'}} onClick={this.modal}>Comment</Button>
            <Modal isOpen={this.state.model}>
                <ModalHeader> Record your work log: </ModalHeader>
                <ModalBody>
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                        <Label for="date">Date</Label>
                        <Input id="li_date" type="date" name="date" placeholder="enter the date" onChange={(e:any) => this.setState({date: e.target.value})} value={this.state.date} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="task">Task</Label>
                        <Input id="li_task" type="text" name="task" placeholder="enter the task you have completed..." onChange={(e:any) => this.setState({task: e.target.value})} value={this.state.task} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="time">Time</Label>
                        <Input id="li_time" type='number' name="time" placeholder="How long did this task take to complete?..." onChange={(e:any) => this.setState({time: e.target.value})} value={this.state.time} />
                    </FormGroup>
                    <Button type="submit" className="btn" > Submit </Button>
            </Form>
            </ModalBody>
            </Modal>
            </>
         );
    }
}
 
export default LogCreate;