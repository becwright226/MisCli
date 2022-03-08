import React, { useState, useEffect, Component } from 'react';
import { 
    Card, 
    CardBody, 
    Container,
    Row,
    Col,
    CardTitle,
    CardFooter,
    Button,
    CardSubtitle
} from 'reactstrap';
import PostCreate from '../PostCreate'
import PostDelete from './PostDelete';
import PostEdit from './PostEdit';



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

    // postUpdate = (e:any, post:any) => {
    //     console.log(post.id)
    //     console.log(post)
    //     fetch(`http://localhost:2206/post/${post.id}`, {
    //       method: 'PUT',
    //       body: JSON.stringify({ post: post}),
    //       headers: new Headers({
    //         'Content-Type': 'application/json',
    //         'Authorization': this.props.token
    //       })
    //     })
    //     .then((res) => {
    //       this.setState({ updatePressed: false })
    //       this.fetchPosts();
    //     })
    //   }

    setUpdatedPost = (e:any, post:any) => {
        this.setState({
            postToUpdate: post,
            updatePressed: true
    })
    console.log(post)
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
                        <CardTitle className='postcard-title p-2' scope='row' style={{fontSize:'15pt'}}>{post.title}</CardTitle>
                        <CardSubtitle className='postcard-sub ml-2'>{post.role}-----{post.date}</CardSubtitle>
                        <CardBody className='postcard-content text-center' style={{backgroundColor:' rgb(224, 231, 224)', color: 'black', fillOpacity:'100%'}}> {post.content}</CardBody>
                        <CardFooter className='postcard-footer text-center'><Row className='postcard-button'><Col><PostEdit post={post} token={this.props.token} fetchPosts={this.fetchPosts}/></Col>
                       <Col><PostDelete token={this.props.token} fetchPosts={this.fetchPosts} post={post} /></Col></Row></CardFooter>
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
          </Container>
       
            </>
         );
    }
}
 
  export default PostDisplay;