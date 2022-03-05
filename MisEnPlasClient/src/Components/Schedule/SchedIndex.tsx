import React, { Component } from 'react'
import { Container } from 'reactstrap';
import SchedCreateIndex from './Schedule';

interface SchedIndexProps {
    token: string
}
 
interface SchedIndexState {
    
}
 
class SchedIndex extends React.Component<SchedIndexProps, SchedIndexState> {
    constructor(props: SchedIndexProps) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return ( 
        <Container>
           <SchedCreateIndex token={this.props.token}/>
        </Container> );
    }
}
 
export default SchedIndex;
