import React, { useState, useEffect, Component } from 'react';
import { 
    Card, 
    CardBody, 
    CardImg, 
    Container,
    Row,
    Col,
    CardHeader
} from 'reactstrap';
import Footer from '../Footer/Footer';
import PostDisplay from './PostCard/PostDisplay'
import PostCreate from './PostCreate';
import './Post.css'
import PostEdit from './PostCard/PostEdit';



interface PostIndexProps {
    token: string
    clearLocalStorage: () => void
    
    
}
interface PostIndexState {
    trigger: boolean 
}



class PostIndex extends Component <PostIndexProps, PostIndexState> {

   
    constructor(props: PostIndexProps) {
        super(props);
       this.state ={
        trigger: false 
       };
    }
     
    triggerMethod = () => {
        this.setState({trigger:!this.state.trigger})
    }

    render() { 
        return ( 
            <>
          <Container className='post-main' style={{float:'right'}}>
              <Row>
              <Col md='4'>
             <PostCreate triggerMethod={this.triggerMethod} token={this.props.token}/>
              </Col> 
                  <Col md='8'>
                     <PostDisplay trigger={this.state.trigger} token={this.props.token} /> 
                  </Col>      
              </Row>
          </Container>
            </>
         );
    }
}
 
  export default PostIndex;