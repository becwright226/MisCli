import React, { Component } from 'react'


interface FooterProps {
    
}
 
interface FooterState {
    
}
 
class Footer extends Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        //this.state = { :  };
    }
    render() { 
        return ( 
            <footer className='footer p-5'>
                <h4>This is a footer for your page </h4>
            </footer>
         );
    }
}
 
export default Footer;