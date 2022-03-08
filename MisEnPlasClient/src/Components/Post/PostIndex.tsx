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
    //posts: object[]
    
    
}
interface PostIndexState {
}



class PostIndex extends Component <PostIndexProps, PostIndexState> {

   
    constructor(props: PostIndexProps) {
        super(props);
       this.state ={
         
       };
    }
     

    render() { 
        return ( 
            <>
        
          <Container className='post-main' style={{float:'right'}}>
              <Row>
              <Col md='4'>
             <PostCreate token={this.props.token}/>
              </Col> 
                  <Col md='8'>
                     <PostDisplay token={this.props.token} /> 
                  </Col>      
              </Row>
              <Col md='12'>
                  
              </Col>
          </Container>
            </>
         );
    }
}
 
  export default PostIndex;