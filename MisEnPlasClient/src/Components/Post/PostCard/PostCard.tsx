import { AsyncHook } from 'async_hooks';
import * as React from 'react';
import { useEffect } from 'react';

interface PostCardProps {
    fetchPost: AsyncHook
}
 
interface PostCardState {
    
}


useEffect(() => {
   
  }, []);
 
class PostCard extends React.Component<PostCardProps, PostCardState> {
    constructor(props: PostCardProps) {
        super(props);
        //this.state = { :  };
    }


    render() { 
        return ( <div> Hello from PostCard </div>  );
    }
}
 
export default PostCard;