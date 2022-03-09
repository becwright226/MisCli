import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import DiaryCreate from './DiaryCreate';
import DiaryDisplay from './DiaryDisplay';
import './Diary.css'
import Main from '../Navbar/Main';
import SiteBar from '../Navbar/Navbar';

interface DiaryProps {
    token:string
    clearLocalStorage: () => void
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
            <>
            <SiteBar clearLocalStorage={this.props.clearLocalStorage}  />
            <Container className='diary-main' style={{float:'right'}}>
            <Row>
          <Col md='4'>
          <DiaryCreate token={this.props.token} />
          </Col> 
              <Col md='8'>
                 <DiaryDisplay token={this.props.token} /> 
              </Col>      
          </Row>
        </Container></>
            
         );
    }
}
 
export default Diary;