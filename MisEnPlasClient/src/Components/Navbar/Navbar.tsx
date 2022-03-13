import React, {Component, useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarHeader,
    SubMenu,
  } from "react-pro-sidebar";
  import "react-pro-sidebar/dist/css/styles.css";
  import { Link } from "react-router-dom"

import './Main.css'
import {BiFoodMenu, BiTachometer} from 'react-icons/bi'
import { GiCook, GiPayMoney } from 'react-icons/gi';
import {SiLivejournal} from 'react-icons/si';
import {GrRestaurant} from 'react-icons/gr';
import {AiOutlineSchedule} from 'react-icons/ai';
import {IoRestaurant} from 'react-icons/io5';
import { MdOutlineFoodBank} from 'react-icons/md'
import { ToggleButton } from 'react-bootstrap';

interface SiteBarProps {
    clearLocalStorage: () => void
    token:string
    updateLocalStorage: (newToken: string, newRole: string) => void
}
interface SiteBarState {
    collapsed: boolean
}
 

 
class SiteBar extends Component<SiteBarProps, SiteBarState> {
    constructor(props: SiteBarProps) {
        super(props);
        this.state = {
            collapsed: false
        }
    
    }




    collapse = () => {
        this.setState({collapsed: !this.state.collapsed})
    }

    


    render() { 

    return (




        <><ProSidebar collapsed collapsedWidth={'16%'}  breakPoint='md' style={{height:'100vh', fontFamily:'Faustina, serif', opacity: '95%' }} className='side col-lg-2' >
            <Nav aria-controls="responsive-navbar-nav">
            <Menu id='responsive-navbar-nav' iconShape="square" style={{height:'100vh',backgroundColor:'rgb(41, 61, 41)' }}>
        
                <MenuItem icon={<SiLivejournal/>}> 
                <Link to="/diary" className="site-link"> Shift Diary </Link> </MenuItem>
                
                
                    <MenuItem icon={<MdOutlineFoodBank/>} ><Link to='/login' className="site-link"></Link> Restaurant Posts </MenuItem>
            
                
                    <MenuItem icon={<AiOutlineSchedule />} ><Link to="/schedule" className="site-link"> Schedules </Link></MenuItem>
                  
              
                    <MenuItem icon={<BiFoodMenu/>} ><Link to="/recipe" className="site-link"> Recipes Main </Link></MenuItem>
                    
               
                    <MenuItem icon={<GiPayMoney />} ><Link to='/order' className="site-link"> Orders </Link> </MenuItem>
            </Menu>
            </Nav>
        </ProSidebar>
        </>
    
     );
}
}

export default SiteBar;

///<NavItem>
//<NavLink onClick={this.handleClick}><Link to="/logout" className="site-link"> Logout </Link></NavLink>
//</NavItem>