import React, { Component } from 'react'
import { Container } from 'reactstrap';
import DiaryCreate from './DiaryCreate';

interface DiaryProps {
    token:string
}
 
interface DiaryState {
    
}
 
class Diary extends Component<DiaryProps, DiaryState> {
    constructor(props: DiaryProps) {
        super(props);
       // this.state = { :  };
    }
    render() { 
        return ( 
            <Container>
                <DiaryCreate token={this.props.token} />
            </Container>
         );
    }
}
 
export default Diary;