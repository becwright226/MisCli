import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import LogCreate from './LogCreate';
import LogDisplay from './LogDisplay';

interface LogProps {
    token: string
    schedule: schedData
    trigger: boolean;
}

interface schedData {
    id:string
    date: string,
    task: string,
    desc: string,
    empAssign?: string
    model: boolean
}
 
interface LogState {
   trigger: boolean
}
 
class Log extends Component<LogProps, LogState> {
    constructor(props: LogProps) {
        super(props);
        this.state = {
            trigger: false
        };
    }

    triggerMethod = () => {
        this.setState({trigger:!this.state.trigger})
    }

    render() { 
        return ( 
        <Container>
            <Row>
                <Col>
                <LogCreate token={this.props.token} triggerMethod={this.triggerMethod} schedule={this.props.schedule} />
                </Col>
                <Col>
                <LogDisplay schedule={this.props.schedule} token={this.props.token} trigger={this.props.trigger} />
                </Col>
            </Row>

           
        </Container> );
    }
}
 
export default Log;
