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




interface DiaryDisplayProps {
    token: string

    
    
}

interface DiaryDisplayState {
    diaries: object[],
    //updatePressed: boolean,
   // diaryToUpdate: object
   
} 


class DiaryDisplay extends Component <DiaryDisplayProps, DiaryDisplayState> {

   
    constructor(props: DiaryDisplayProps) {
        super(props);
      this.state ={
          diaries: [],
        //   updatePressed: false,
        //   diaryToUpdate: {}
        };
    }

    fetchDiaries = async () => {
        try {
            const res = await fetch('http://localhost:2206/diary/mydiaries', {
                method: 'GET',
                headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': String(localStorage.getItem('token'))
              })
            })
            const data= await res.json()
            this.setState({diaries: data})
            console.log(data)
            console.log(this.state.diaries)
        } catch (error) {
            console.log({error})
        }
    }

    componentDidMount = () => {
        this.fetchDiaries()
    }


 
    render() { 
        const diaryMapper = () => {
            return this.state.diaries.map((diary: any, index: any) => {
                return (
                    <Card className='diarycard m-5' style={{backgroundColor:' rgb(41, 61, 41)', color:'#bbabc2', opacity:'90%', fontFamily:'Faustina'}} key={index}>
    
                        <CardTitle className='diarycard-title m-3' scope='row' style={{fontSize:'15pt'}}>{diary.title}</CardTitle>
                        <CardSubtitle className='diarycard-sub text-center'>{diary.date}</CardSubtitle>
                        <CardBody className='diarycard-content text-center' style={{backgroundColor:' rgb(224, 231, 224)', color:'#453c49', fillOpacity:'100%'}}> {diary.content}</CardBody>
                        
                      
                        <p> <Button id={diary.id} color="warning">Update</Button> </p>
                    </Card>
                )
            })
        }
        return ( 
            <>
          <Container>
              <Row>
                  <Col>
                   {diaryMapper()}  
                  </Col>
              </Row>
              <Col md='12'>
              </Col>
          </Container>
            </>
         );
    }
}
 
  export default DiaryDisplay;