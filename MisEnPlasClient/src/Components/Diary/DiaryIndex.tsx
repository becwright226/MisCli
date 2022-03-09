import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import DiaryCreate from './DiaryCreate';
import DiaryDisplay from './DiaryDisplay';
import './Diary.css'

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
            <Container className='diary-main' style={{float:'right'}}>
                <Row>
              <Col md='4'>
              <DiaryCreate token={this.props.token} />
              </Col> 
                  <Col md='8'>
                     <DiaryDisplay token={this.props.token} /> 
                  </Col>      
              </Row>
            </Container>
         );
    }
}
 
export default Diary;