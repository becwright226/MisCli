import React from 'react'
import '../Navbar/Main.css'
// import Navbar from 'react-bootstrap/NavBar'
// import Nav from 'react-bootstrap/Nav'
// import { NavItem, NavLink } from 'react-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown'


import "react-pro-sidebar/dist/css/styles.css";

import { BrowserRouter, Link} from 'react-router-dom'
import { Navbar, NavDropdown, NavLink, NavItem, Nav ,Button   } from 'react-bootstrap';
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
//   <ProSidebar collapsed >
// <SidebarHeader>
//   <div className='logotext'>
//     <p>{menuCollapse? "Logo" : 'BigLogo'}</p>
//   </div>
//   <div className='closemenu' onClick={this}>

//   </div>
// </SidebarHeader>

//   </ProSidebar>
      

  <Navbar  collapseOnSelect expand='lg' className='main-nav' variant="dark">
  <Navbar.Brand href={'/login'}  >Mis En Plas <GiCook/> </Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
    <Nav style={{float:'right'}}>

      {!this.props.token ? (
        <>
        <NavItem style={{float:'right'}}>
          <NavLink> <Link to='/signup'> SignUp </Link> </NavLink>
        </NavItem>
        <NavItem style={{float:'right'}}>
          <NavLink> <Link to='/login'> Login </Link> </NavLink>
        </NavItem>
        </>
      ) : (
        <>
        {/* <NavItem>
          <NavLink> <Link to='/login'> Resturant Posts </Link> </NavLink>
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
        </NavItem> */}

        <NavItem> 
        <NavLink> <Link to='/logout' onClick={this.props.clearLocalStorage}> Logout </Link> </NavLink>
        </NavItem>

      <NavDropdown title="More" id="collasible-nav-dropdown">

        <NavDropdown.Item >
          <Link to='/about'>About Us </Link> 
        </NavDropdown.Item>

        <NavDropdown.Divider />
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