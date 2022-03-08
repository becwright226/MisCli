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
import Recipe from './RecipeIndex';



interface RecipeDisplayProps {
    token: string
  
    
    
}

interface RecipeDisplayState {
    recipes: object[],
    //updatePressed: boolean,
   // postToUpdate: object
   
} 


class RecipeDisplay extends Component <RecipeDisplayProps, RecipeDisplayState> {

   
    constructor(props: RecipeDisplayProps) {
        super(props);
      this.state ={
          recipes: [],
        //   updatePressed: false,
        //   postToUpdate: {}
        };
    }

    fetchRecipes = async () => {
        try {
            const res = await fetch('http://localhost:2206/recipe/allrecipes', {
                method: 'GET',
                headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': String(localStorage.getItem('token'))
              })
            })
            const data= await res.json()
            this.setState({recipes: data})
            console.log(data)
            console.log(this.state.recipes)
        } catch (error) {
            console.log({error})
        }
    }

    componentDidMount = () => {
        this.fetchRecipes()
    }


 
    render() { 
        const recipeMapper = () => {
            return this.state.recipes.map((recipe: any, index: any) => {
                return (
                    <Card className='recicard m-5' style={{backgroundColor:' rgb(41, 61, 41)', color:'#bbabc2', opacity:'90%', fontFamily:'Faustina'}} key={index}>
                        <CardTitle className='recicard-title m-3' scope='row' style={{fontSize:'15pt'}}>{recipe.title}</CardTitle>
                        <CardSubtitle className='recicard-sub m-3' scope='row' style={{fontSize:'15pt'}}>{recipe.method}</CardSubtitle>
                        <CardSubtitle className='recicard-sub m-3' scope='row' style={{fontSize:'15pt'}}>{recipe.time}</CardSubtitle>
                        <CardBody className='recicard-content text-center' style={{backgroundColor:' rgb(224, 231, 224)', color:'#453c49', fillOpacity:'100%'}}> {recipe.desc}</CardBody>
                        <CardFooter className='recicard-footer text-center'>{recipe.course}-----{recipe.cuisine}</CardFooter>
                      
                        <p> <Button id={recipe.id} color="warning">Update</Button> </p>
                    </Card>
                )
            })
        }
        return ( 
            <>
        
          <Container>
              <Row>
                  <Col>
                   {recipeMapper()}  
                  </Col>
              </Row>
              <Col md='12'>
              </Col>
          </Container>
            </>
         );
    }
}
 
  export default RecipeDisplay;