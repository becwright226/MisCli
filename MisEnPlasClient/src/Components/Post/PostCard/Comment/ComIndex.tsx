import React, { Component } from 'react'
import { Container } from 'reactstrap';

interface ComIndexProps {
    token: string
}
 
interface ComIndexState {
    
}
 
class ComIndex extends Component<ComIndexProps, ComIndexState> {
    constructor(props: ComIndexProps) {
        super(props);
       // this.state = { :  };
    }
    render() { 
        return ( 
            <Container>
                
            </Container>
         );
    }
}
 
export default ComIndex;