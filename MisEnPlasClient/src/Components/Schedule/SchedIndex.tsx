import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import SchedDisplay from './ScheduleCard/SchedDisplay';
import SchedCreate from './ScheduleCreate';
import './Schedule.css'
import SiteBar from '../Navbar/Navbar';


interface SchedIndexProps {
    token: string
    clearLocalStorage: () => void
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
            <>
             <SiteBar clearLocalStorage={this.props.clearLocalStorage}  />
        <Container className='schedule-main' style={{float:'right'}}>
           <Row>
              <Col md='4'>
              <SchedCreate token={this.props.token}/>
              </Col> 
                  <Col md='8'>
                     <SchedDisplay token={this.props.token} /> 
                  </Col>      
              </Row>
              <Col md='12'>
                  
              </Col>
        </Container></>
            );
    }
}
 
export default SchedIndex;
