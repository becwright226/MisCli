import * as React from 'react';
import Nav from './Navbar';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Post from '../Post/Post';
import Order from '../Order/Order';
import Recipe from '../Recipe/RecipeCreate'
import SchedIndex from '../Schedule/SchedIndex';
import Diary from '../Diary/Diary';
import PostCreate from '../Post/PostCreate';

interface MainProps {
  clearLocalStorage: (token:string) => void
  token: string
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
                    <Route path="/" element={ <PostCreate token={this.props.token} /> } />
                    <Route path="/order" element={ <Order/> } />
                    <Route path="/recipe" element={ <Recipe token={this.props.token} /> } />
                    <Route  path="/diary" element={ <Diary token={this.props.token}/> } />
                    <Route  path="/schedule" element={ <SchedIndex token={this.props.token} /> } />
                  
                </Routes>
            </Router>
        </React.Fragment>  );
    }
}
 
export default Main;
