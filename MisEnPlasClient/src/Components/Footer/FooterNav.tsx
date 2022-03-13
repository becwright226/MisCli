import React from 'react'

// import Navbar from 'react-bootstrap/NavBar'
// import Nav from 'react-bootstrap/Nav'
// import { NavItem, NavLink } from 'react-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown'


import { BrowserRouter, Link} from 'react-router-dom'
import { Navbar, NavDropdown, NavLink, Nav, NavItem, Button   } from 'react-bootstrap';
import { GiCook } from 'react-icons/gi';



interface UserNavProps {
  clearLocalStorage: () => void,
  token: string | null
  updateLocalStorage: (newToken: string, newRole: string) => void
}
 
interface UserNavState {
  
}
 
class UserNav extends React.Component<UserNavProps, UserNavState> {
  constructor(props: UserNavProps) {
    super(props);
    this.state = {  };
  }
  render() { 
    return ( 
  

  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href={'/'}  >Mis En Plas <GiCook/> </Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

      {!this.props.token ? (
        <>
        <NavItem>
          <NavLink> <Link to='/signup'> SignUp </Link> </NavLink>
        </NavItem>

        <NavItem>
          <NavLink> <Link to='/login'> Login </Link> </NavLink>
        </NavItem>
        </>
      ) : (
        <>
        <NavItem>
          <NavLink> <Link to='/main'> Resturant Posts </Link> </NavLink>
        </NavItem>

        <NavItem>
          <NavLink> <Link to='/order'> Orders </Link> </NavLink>
        </NavItem>

        <NavItem>
          <NavLink> <Link to='/recipe'> Recipes </Link> </NavLink>
        </NavItem>

        <NavItem>
          <NavLink> <Link to='/diary'> Shift Diary </Link> </NavLink>
        </NavItem>

        <NavItem>
          <NavLink> <Link to='/schedule'> Schedules </Link> </NavLink>
        </NavItem>

      <NavDropdown title="More" id="collasible-nav-dropdown">

        <NavDropdown.Item >
          <Link to='/about'>About Us </Link> 
        </NavDropdown.Item>

        <NavDropdown.Divider />

        <NavDropdown.Item> 
        <Button onClick={this.props.clearLocalStorage}> Logout </Button>
        </NavDropdown.Item>

      </NavDropdown>
</>

      )}
     
    </Nav>
    </Navbar.Collapse>
  </Navbar>


   );
  }
}
 
export default UserNav;