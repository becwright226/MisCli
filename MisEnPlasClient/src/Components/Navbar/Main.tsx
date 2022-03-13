import * as React from 'react';
import Nav from '../Footer/FooterNav';
import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom';
import Post from '../Post/PostIndex';
import Recipe from '../Recipe/RecipeIndex'
import Sched from '../Schedule/SchedIndex';
import Diary from '../Diary/DiaryIndex';
import Order from '../Order/OrderIndex';
import { Component } from 'react';
import SchedIndex from '../Schedule/SchedIndex';
//import PostIndex from '../Post/PostIndex';

interface MainProps {
  clearLocalStorage: () => void
  token: string
  updateLocalStorage: (newToken: string, newRole: string) => void
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
          
                <Nav token={this.props.token} clearLocalStorage={this.props.clearLocalStorage} updateLocalStorage={this.props.updateLocalStorage}/>
                <Routes>
                    <Route path="/main" element={<> {this.props.token ? <> <Post clearLocalStorage={this.props.clearLocalStorage} token={this.props.token}/> </> : <Navigate to="/login" replace/>}</> } />

                   <Route path="/order" element={ <> {this.props.token ? <><Order clearLocalStorage={this.props.clearLocalStorage} token={this.props.token}/> </> : <Navigate to="/login" replace/>}</> } />

                   <Route path="/recipe" element={ <> {this.props.token ? <><Recipe clearLocalStorage={this.props.clearLocalStorage} token={this.props.token}/> </> : <Navigate to="/login" replace/>}</> } />

                   <Route path="/diary" element={ <> {this.props.token ? <><Diary clearLocalStorage={this.props.clearLocalStorage} token={this.props.token}/> </> : <Navigate to="/login" replace/>}</> } />

                   <Route path="/schedule" element={ <> {this.props.token ? <><SchedIndex clearLocalStorage={this.props.clearLocalStorage} token={this.props.token}/> </> : <Navigate to="/login" replace/>}</> } />
                    
                  
                </Routes> 
          
        </React.Fragment>  
        );
    }
}


 
export default Main;
