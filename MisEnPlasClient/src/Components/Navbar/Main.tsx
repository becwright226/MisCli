import * as React from 'react';
import Nav from './Navbar';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Post from '../Post/PostIndex';
import Recipe from '../Recipe/RecipeIndex'
import Sched from '../Schedule/SchedIndex';
import Diary from '../Diary/DiaryIndex';
import Order from '../Order/OrderIndex';
import { Component } from 'react';
//import PostIndex from '../Post/PostIndex';

interface MainProps {
  clearLocalStorage: (token:string) => void
  token: string
  //posts: object[]
}
 

 
class Main extends Component<MainProps> {
    constructor(props: MainProps) {
        super(props);
      //  this.state = { :  };
    }
    render() { 
        return (
        
        <React.Fragment>
            <Router>
                <Nav clearLocalStorage={this.props.clearLocalStorage}/>
                <Routes>
                     <Route path="/" element={ <Post token={this.props.token} /> } />
                   <Route path="/order" element={ <Order token={this.props.token}/> } />
                    <Route path="/recipe" element={ <Recipe token={this.props.token} /> } />
                    <Route  path="/diary" element={ <Diary token={this.props.token}/> } />
                    <Route  path="/schedule" element={ <Sched token={this.props.token} /> } />
                  
                </Routes> 
            </Router>
        </React.Fragment>  
        );
    }
}
 
export default Main;
