import React, { useState, useEffect, Component } from 'react';
import { 
    Card, 
    CardBody, 
    Container,
    Row,
    Col,
    CardTitle,
    CardFooter,
    Button
} from 'reactstrap';
import PostCreate from '../PostCreate'



interface PostDisplayProps {
    token: string

    
    
}

interface PostDisplayState {
    posts: object[],
    updatePressed: boolean,
    postToUpdate: object
   
} 


class PostDisplay extends Component <PostDisplayProps, PostDisplayState> {

   
    constructor(props: PostDisplayProps) {
        super(props);
      this.state ={
          posts: [],
          updatePressed: false,
          postToUpdate: {}
        };
    }

    fetchPosts = async () => {
        try {
            const res = await fetch('http://localhost:2206/post/allposts', {
                method: 'GET',
                headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': String(localStorage.getItem('token'))
              })
            })
            const data= await res.json()
            this.setState({posts: data.allPosts})
            console.log(data)
            console.log(this.state.posts)
        } catch (error) {
            console.log({error})
        }
    }

    componentDidMount = () => {
        this.fetchPosts()
    }


 
    render() { 
        const postMapper = () => {
            return this.state.posts.map((post: any, index: any) => {
                return (
                    <Card className='postcard m-5' style={{backgroundColor:' rgb(41, 61, 41)', color:'#bbabc2', opacity:'90%', fontFamily:'Faustina'}} key={index}>
                    
                        {/* <th scope='row'>{post.id}</th> */}
                        <CardTitle className='postcard-title m-3' scope='row' style={{fontSize:'15pt'}}>{post.title}</CardTitle>
                        <CardBody className='postcard-content text-center' style={{backgroundColor:' rgb(224, 231, 224)', color:'#453c49', fillOpacity:'100%'}}> {post.content}</CardBody>
                        <CardFooter className='postcard-footer text-center'>{post.role}-----{post.date}</CardFooter>
                      
                        <p> <Button id={post.id} color="warning">Update</Button> </p>
                    </Card>
                )
            })
        }
        return ( 
            <>
        
          <Container>
              <Row>
                  <Col>
                   {postMapper()}  
                  </Col>
              </Row>
              <Col md='12'>
              </Col>
          </Container>
        { /* <PostCreate token={this.props.token} posts={this.props.posts} />*/}
            </>
         );
    }
}
 
  export default PostDisplay;