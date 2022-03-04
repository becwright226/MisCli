import * as React from 'react';
import Nav from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Post from '../Post/Post';
import Order from '../Order/Order';
import Recipe from '../Recipe/RecIndex';
import SchedIndex from '../Schedule/SchedIndex';
import Diary from '../Diary/Diary';

interface MainProps {
  clearLocalStorage: (token:string) => void
}
 

 
class Main extends React.Component<MainProps> {
    constructor(props: MainProps) {
        super(props);
      //  this.state = { :  };
    }
    render() { 
        return (<React.Fragment>
            <Router>
                <Nav clearLocalStorage={this.props.clearLocalStorage}/>
                <Routes>
                    <Route path="/home" element={ Post } />
                    <Route path="/order" element={ Order } />
                    <Route path="/recipe" element={ Recipe } />
                    <Route  path="/diary" element={ Diary } />
                    <Route  path="/schedule" element={ SchedIndex } />
                </Routes>
            </Router>
        </React.Fragment>  );
    }
}
 
export default Main;
