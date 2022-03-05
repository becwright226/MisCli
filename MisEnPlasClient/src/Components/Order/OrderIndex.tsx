import React, { Component } from 'react'
import { Container } from 'reactstrap';
import OrderCreate from './OrderCreate';

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
            <Container>
                <OrderCreate token={this.props.token}/>
            </Container>
         );
    }
}
 
export default OrderIndex;