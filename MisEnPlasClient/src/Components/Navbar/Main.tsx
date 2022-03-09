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
  clearLocalStorage: () => void
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
          
                <Nav clearLocalStorage={this.props.clearLocalStorage}/>
                <Routes>
                    <Route path="/" element={ <Post clearLocalStorage={this.props.clearLocalStorage} token={this.props.token} /> } />
                   <Route path="/order" element={ <Order clearLocalStorage={this.props.clearLocalStorage} token={this.props.token}/> } />
                    <Route path="/recipe" element={ <Recipe clearLocalStorage={this.props.clearLocalStorage} token={this.props.token} /> } />
                    <Route  path="/diary" element={ <Diary clearLocalStorage={this.props.clearLocalStorage} token={this.props.token}/> } />
                    <Route  path="/schedule" element={ <Sched clearLocalStorage={this.props.clearLocalStorage} token={this.props.token} /> } />
                  
                </Routes> 
          
        </React.Fragment>  
        );
    }
}
 
export default Main;
