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
import {BiFoodMenu, BiLogOut, BiTachometer} from 'react-icons/bi'
import { GiChefToque, GiCook, GiMoneyStack, GiPayMoney } from 'react-icons/gi';
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




        <><ProSidebar collapsed collapsedWidth={'16%'}  breakPoint='md' style={{height:'100vh', fontFamily:'Faustina, serif', opacity: '95%', }}  >
          
            <Menu id='responsive-navbar-nav' style={{height:'100vh',backgroundColor:'rgb(41, 61, 41)' }}>
        
                
                
                
                    <MenuItem icon={<MdOutlineFoodBank style={{color:'#b2d33a'}}/>} ><Link to='/login' className="site-link" style={{color:'rgb(224, 231, 224)'}}>Restaurant Posts</Link></MenuItem>
            
                    <MenuItem icon={<BiFoodMenu style={{color:'#b2d33a'}}/>}> 
                <Link to="/diary" className="site-link" style={{color:'rgb(224, 231, 224)'}}> Shift Diary </Link> </MenuItem>
                
                    <MenuItem icon={<AiOutlineSchedule style={{color:'#b2d33a'}} />} ><Link to="/schedule" className="site-link" style={{color:'rgb(224, 231, 224)'}}> Schedules </Link></MenuItem>
                  
              
                    <MenuItem icon={<GiChefToque style={{color:'#b2d33a'}}/>} ><Link to="/recipe" className="site-link" style={{color:'rgb(224, 231, 224)'}}> Recipes Main </Link></MenuItem>
                    
               
                    <MenuItem icon={<GiMoneyStack style={{color:'#b2d33a'}} />} ><Link to='/order' className="site-link" style={{color:'rgb(224, 231, 224)'}}> Orders </Link> </MenuItem>

                    <MenuItem icon={<BiLogOut style={{color:'#b2d33a'}} />} ><Link to='/logout' onClick={this.props.clearLocalStorage} className="site-link" style={{color:'rgb(224, 231, 224)'}}> Logout </Link> </MenuItem>
            </Menu>
         
        </ProSidebar>
        </>
    
     );
}
}

export default SiteBar;

///<NavItem>
//<NavLink onClick={this.handleClick}><Link to="/logout" className="site-link"> Logout </Link></NavLink>
//</NavItem>