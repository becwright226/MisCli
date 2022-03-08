import React, { useState, useEffect, Component } from 'react';
import { 
    Card, 
    CardBody, 
    Container,
    Row,
    Col,
    CardTitle,
    CardFooter,
    Button,
    CardSubtitle,
    Table
} from 'reactstrap';




interface OrderDisplayProps {
    token: string

    
    
}

interface OrderDisplayState {
   orders: object[],
    //updatePressed: boolean,
   // diaryToUpdate: object
   
} 


class OrderDisplay extends Component <OrderDisplayProps, OrderDisplayState> {

   
    constructor(props: OrderDisplayProps) {
        super(props);
      this.state ={
          orders: [],
        //   updatePressed: false,
        //   diaryToUpdate: {}
        };
    }

    fetchOrders = async () => {
        try {
            const res = await fetch('http://localhost:2206/order/orders', {
                method: 'GET',
                headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': String(localStorage.getItem('token'))
              })
            })
            const data= await res.json()
            this.setState({orders: data})
            console.log(data)
            console.log(this.state.orders)
        } catch (error) {
            console.log({error})
        }
    }

    componentDidMount = () => {
        this.fetchOrders()
    }


 
    render() { 
        const orderMapper = () => {
            return this.state.orders.map((order: any, index: any) => {
                return (
                    <Table className='ordertab m-5' style={{backgroundColor:' rgb(41, 61, 41)', color:'#bbabc2', opacity:'90%', fontFamily:'Faustina'}} key={index}>
                        <thead>
                            <tr>
                                <th className='ordertab-title m-3' scope='row' style={{fontSize:'15pt'}}>{order.title}</th>
                                <th className='ordertab-date text-center'>{order.date}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <p className='ordertab-cont text-center'>
                                {order.content}
                            </p>
                        </tbody>
                        <p> <Button id={order.id} color="warning">Update</Button> </p>
                    </Table>
                )
            })
        }
        return ( 
            <>
          <Container>
              <Row>
                  <Col>
                   {orderMapper()}  
                  </Col>
              </Row>
              <Col md='12'>
              </Col>
          </Container>
            </>
         );
    }
}
 
  export default OrderDisplay;