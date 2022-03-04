import * as React from 'react';

interface OrderProps {
    
}
 
interface OrderState {
    
}
 
class Order extends React.Component<OrderProps, OrderState> {
    constructor(props: OrderProps) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return ( <div>

            <h1>Hello from Order</h1>
        </div> );
    }
}
 
export default Order;