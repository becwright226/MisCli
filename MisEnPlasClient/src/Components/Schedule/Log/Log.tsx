import React, { Component } from 'react'
import { Container } from 'reactstrap';

interface LogProps {
    
}
 
interface LogState {
    
}
 
class Log extends React.Component<LogProps, LogState> {
    constructor(props: LogProps) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return ( <Container>
            <h1>Hello from Log</h1>
        </Container> );
    }
}
 
export default Log;
