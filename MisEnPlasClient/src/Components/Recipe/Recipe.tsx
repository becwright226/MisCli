import React, { Component } from 'react'
import { Container } from 'reactstrap';

interface RecipeProps {
    
}
 
interface RecipeState {
    
}
 
class Recipe extends React.Component<RecipeProps, RecipeState> {
    constructor(props: RecipeProps) {
        super(props);
       // this.state = { :  };
    }
    render() { 
        
        return (  <Container>
            <h1>Hello from RecipeIndex</h1>
        </Container>);
    }
}
 
export default Recipe;