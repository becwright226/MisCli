import React, { useState, useEffect, Component } from 'react';
import { 
    Card, 
    CardBody, 
    CardImg, 
    Container,
    Row,
    Col
} from 'reactstrap';
import {Route, Link, Routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import PostCreate from './PostCreate';


interface PostProps {
    token: string,
    
    
}
 


class Post extends Component <PostProps> {

   
    constructor(props: PostProps) {
        super(props);
        
    }
 
  
     fetchPost = async () => {
        try {
        const res = await fetch(`http://localhost:2206/post/allposts`,{
            method:"GET",
            headers: new Headers({
                "Content-Type":"application/json",
                "Authorization": this.props.token
            }),
        })
        const data = await res.json()
       

    } catch (error) {

    }
    } 
        

  
   
    render() { 
        return ( 
            <>
     
     
            <Container onLoad={this.fetchPost}>
            <Row>
              <Col md='3'>
                <PostCreate token={this.props.token}/>
                </Col>
              <Col md='9'>
          
        
          
              </Col>
               
            </Row>
          
          
          
          </Container>
          
          </>
         );
    }
}
 
  export default Post;
