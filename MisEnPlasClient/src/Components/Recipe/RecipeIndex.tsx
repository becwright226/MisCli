import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import PostDisplay from '../Post/PostCard/PostDisplay';
import RecipeCreate from './RecipeCreate';
import RecipeDisplay from './RecipeDisplay';
import './Recipe.css'

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
        <Container className='recipe-main' style={{float:'right'}}>
           <Row>
              <Col md='4'>
              <RecipeCreate token={this.props.token} /> 
              </Col> 
                  <Col md='8'>
                     <RecipeDisplay token={this.props.token} /> 
                  </Col>      
              </Row>
              <Col md='12'>
                  
              </Col>
        </Container>);
    }
}
 
export default Recipe;