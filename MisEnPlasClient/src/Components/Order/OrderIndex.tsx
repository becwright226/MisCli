import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import OrderCreate from './OrderCreate';
import OrderDisplay from './OrderDisplay';
import './Order.css'

interface OrderIndexProps {
    token: string
}
 
//interface OrderIndexState {
    
//}
 
class OrderIndex extends React.Component<OrderIndexProps> {
    constructor(props: OrderIndexProps) {
        super(props);
       // this.state = { :  };
    }
    render() { 
        return ( 
            <Container className='order-main' style={{float:'right'}}>
                <Row>
              <Col md='4'>
              <OrderCreate token={this.props.token}/>
              </Col> 
                  <Col md='8'>
                     <OrderDisplay token={this.props.token} /> 
                  </Col>      
              </Row>
            </Container>
         );
    }
}
 
export default OrderIndex;