import * as React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import {GiCook} from 'react-icons/gi'
import '../Auth.css'
import { Link } from 'react-router-dom';

interface AuthBarProps {
  updateLocalStorage: (newToken: string) => void
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
           <Navbar dark expand-lg className='auth-nav'>
              <NavbarBrand href={'/'} className="mr-auto">
                Mis En Plas <GiCook/>
              </NavbarBrand>
              {/*<NavbarToggler className="mr-2" />*/}
             {/* <Collapse navbar>*/}
               <Nav navbar updateLocalStorage={this.props.updateLocalStorage}>
              <NavItem>
                <NavLink style={{fontFamily:'Faustina'}}> <Link to={'/login'}>Login</Link></NavLink>
              </NavItem>
            </Nav>
          {/*</Collapse>*/}
            </Navbar> 


            
          </div> );
    }
}
 
export default AuthBar;



