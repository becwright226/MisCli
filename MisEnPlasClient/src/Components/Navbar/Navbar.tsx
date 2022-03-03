import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

interface SiteBarProps {
    
}
 
interface SiteBarState {
    
}
 
class SiteBar extends React.Component<SiteBarProps, SiteBarState> {
    constructor(props: SiteBarProps) {
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
 
export default SiteBar;