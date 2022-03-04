import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
interface SiteBarProps {
    clearLocalStorage: (token: string) => void
}
interface SiteBarState {
    token:string
}
 

 
class SiteBar extends React.Component<SiteBarProps, SiteBarState> {
    constructor(props: SiteBarProps) {
        super(props);
    
    }

    
    render() { 

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
                Home
            </NavbarBrand>
            <Nav className="ml-auto" clearLocalStorage={this.props.clearLocalStorage}>
                <NavItem>
                    <NavLink><Link to='/order' className="site-link"> Orders </Link></NavLink>
                </NavItem>
                <NavItem>
                   <NavLink><Link to="/recipe" className="site-link"> Recipes </Link></NavLink> 
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/diary" className="site-link"> Shift Diary </Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/schedule" className="site-link"> Schedules </Link></NavLink>
                </NavItem>   
                <NavItem>
                <NavLink> <Button token={this.props.clearLocalStorage}> Logout </Button></NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}
};

export default SiteBar;

///<NavItem>
//<NavLink onClick={this.handleClick}><Link to="/logout" className="site-link"> Logout </Link></NavLink>
//</NavItem>