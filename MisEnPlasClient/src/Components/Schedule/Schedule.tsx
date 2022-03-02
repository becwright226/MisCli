import React, { Component } from 'react'
import { Container } from 'reactstrap';

interface SchedProps {
    
}
 
interface SchedState {
    
}
 
class SchedIndex extends React.Component<SchedProps, SchedState> {
    constructor(props: SchedProps) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return ( <Container>
            <h1>Hello from Sched</h1>
        </Container> );
    }
}
 
export default SchedIndex;
