import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
interface SiteBarProps {
    clearLocalStorage: (token: string) => void
}
 


 
class SiteBar extends React.Component<SiteBarProps> {
    constructor(props: SiteBarProps) {
        super(props);
    
    }
    render() { 

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
                Home
            </NavbarBrand>
            <Nav className="ml-auto">
                <NavItem>
                    <Link to="/order" className="site-link"> Orders </Link>
                </NavItem>
                <NavItem>
                    <Link to="/recipe" className="site-link"> Recipes </Link>
                </NavItem>
                <NavItem>
                    <Link to="/diary" className="site-link"> Shift Diary </Link>
                </NavItem>
                <NavItem>
                    <Link to="/schedule" className="site-link"> Schedules </Link>
                </NavItem>
                <NavItem>
                    <Link to="/logout" className="site-link" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => this.props.clearLocalStorage}> Logout </Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
}
};

export default SiteBar;