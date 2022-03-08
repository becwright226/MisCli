import React, { Component } from 'react'
import { Container } from 'reactstrap';
import LogCreate from './LogCreate';

interface LogProps {
    token: string
}
 
interface LogState {
    
}
 
class Log extends React.Component<LogProps, LogState> {
    constructor(props: LogProps) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return ( 
        <Container>
           <LogCreate token={this.props.token} />
        </Container> );
    }
}
 
export default Log;
