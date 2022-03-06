import React, { Component } from 'react'
import { Container } from 'reactstrap';
import RecipeCreate from './RecipeCreate';

interface RecipeProps {
    token:string
}
 
interface RecipeState {
    
}
 
class Recipe extends Component<RecipeProps, RecipeState> {
    constructor(props: RecipeProps) {
        super(props);
       // this.state = { :  };
    }
    render() { 
        
        return (  
        <Container>
           <RecipeCreate token={this.props.token} /> 
        </Container>);
    }
}
 
export default Recipe;