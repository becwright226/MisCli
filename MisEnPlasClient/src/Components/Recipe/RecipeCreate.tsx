import React, { Component } from 'react'
import { 
    Container,
    Row,
    Col,
    Form,
    Button,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

interface RecipeCreateProps {
    token: string
}
 
interface RecipeCreateState {
    style: string,
    title: string,
    course: string,
    desc: string,
    time: number,
    method?: string
}
 
class Recipe extends React.Component<RecipeCreateProps, RecipeCreateState> {
    constructor(props: RecipeCreateProps) {
        super(props);
        this.state = { 
            style: '',
            title: '',
            course: '',
            desc: '',
            time: 0,
            method: ''
          };
    }

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()
       const requestObject = {
           style: this.state.style,
           title: this.state.title,
           course: this.state.course,
           desc: this.state.desc,
           time: this.state.time,
           method: this.state.method
       } 
       try {
           const res = await fetch('http://localhost:2206/recipe/', {
               method: 'POST',
               body: JSON.stringify(requestObject),
               headers: new Headers({
                   'Content-Type': 'application/json',
                   'Authorization': this.props.token
               })
           })
           const data = await res.json()
           console.log(data)
          
       } catch (error) {
           console.log({error})
       }
    }
    render() { 
        return (  
            <>
        <Container>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                        <Label for="style"> Style </Label>
                        <Input id="li_style" type="text" name="style" placeholder="ex. French" onChange={(e:any) => this.setState({style: e.target.style})} value={this.state.style} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="title"> Recipe Name </Label>
                        <Input id="li_title" type="text" name="title" placeholder="ex. Creme Brulee" onChange={(e:any) => this.setState({title: e.target.value})} value={this.state.title}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="course"> Course </Label>
                        <Input id="li_course" type='select' name="course" placeholder="ex. Dessert" onChange={(e:any) => this.setState({course: e.target.value})} value={this.state.course}>
                        <option> Appetizers/Small Plates</option>
                        <option > Breakfast/Brunch </option>
                        <option > Lunch </option>
                        <option> Dinner/ Large Plates </option>
                        <option > Desserts/ Treats</option>
                        </Input> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="desc"> Description </Label>
                        <Input id="li_desc" type='textarea' name="desc" placeholder="describe the recipe" onChange={(e:any) => this.setState({desc: e.target.value})} value={this.state.desc}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="time"> Time (in minutes) </Label>
                        <Input id="li_time" type='text' name='time' placeholder="ex. 60" onChange={(e:any) => this.setState({time: e.target.value})} value={this.state.time}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="method"> Method </Label>
                        <Input id="li_method" type='text' name='method' placeholder="ex. Bain Marie" onChange={(e:any) => this.setState({method: e.target.value})} value={this.state.method}/>
                    </FormGroup>
                    <Button type="submit" className="btn" > Submit </Button>
            </Form>
        </Container>
        </>
       );
    }
}
 
export default Recipe;