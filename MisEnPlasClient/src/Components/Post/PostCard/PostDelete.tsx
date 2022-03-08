import React, { Component } from 'react'
import { Button } from 'reactstrap';

interface PostDeleteProps {
    
}
 
interface PostDeleteState {
    
}
 
class PostDelete extends Component<PostDeleteProps, PostDeleteState> {
    constructor(props: PostDeleteProps) {
        super(props);
       // this.state = { :  };
    }
    render() { 
        return ( 
            <div>
                <Button className='edit-btn m-2' style={{backgroundColor:'#d3773a', float: 'right', color: 'black'}}>Delete</Button>
            </div>
         );
    }
}
 
export default PostDelete;