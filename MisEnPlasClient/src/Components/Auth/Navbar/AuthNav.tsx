import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

interface AuthBarProps {
    
}
 
interface AuthBarState {
    
}
 
class AuthBar extends React.Component<AuthBarProps, AuthBarState> {
    constructor(props: AuthBarProps) {
        super(props);
       // this.state = { :  };
    }
    render() { 
        return ( <div>
            <Navbar light style={{backgroundColor:'orange', borderBottom: 'solid black 4px'}}>
              <NavbarBrand href="/" className="mr-auto" style={{fontFamily: 'Moo Lah Lah', fontSize: '35px', color: 'black'}}>
                Mis En Plas
              </NavbarBrand>
            </Navbar>
          </div> );
    }
}
 
export default AuthBar;

