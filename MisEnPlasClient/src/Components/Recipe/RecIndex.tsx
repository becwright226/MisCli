import React, { Component } from 'react'
import { Container } from 'reactstrap';

interface RecipeIndexProps {
    
}
 
interface RecipeIndexState {
    
}
 
class Recipe extends React.Component<RecipeIndexProps, RecipeIndexState> {
    constructor(props: RecipeIndexProps) {
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