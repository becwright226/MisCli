import React, { Component } from 'react'
import { Container } from 'reactstrap';

interface SchedIndexProps {
    
}
 
interface SchedIndexState {
    
}
 
class SchedIndex extends React.Component<SchedIndexProps, SchedIndexState> {
    constructor(props: SchedIndexProps) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return ( <Container>
            <h1>Hello from SchedIndex</h1>
        </Container> );
    }
}
 
export default SchedIndex;
