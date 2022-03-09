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
    CardText,
    CardSubtitle
} from 'reactstrap';
import ScheduleDelete from './ScheduleDelete';
import ScheduleEdit from './ScheduleEdit';



interface SchedDisplayProps {
    token: string

    
    
}

interface SchedDisplayState {
    schedules: object[],
    updatePressed: boolean,
    scheduleToUpdate: object
   
} 


class SchedDisplay extends Component <SchedDisplayProps, SchedDisplayState> {

   
    constructor(props: SchedDisplayProps) {
        super(props);
      this.state ={
          schedules: [],
          updatePressed: false,
          scheduleToUpdate: {}
        };
    }

    fetchScheds = async () => {
        try {
            const res = await fetch('http://localhost:2206/schedule/schedules', {
                method: 'GET',
                headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': String(localStorage.getItem('token'))
              })
            })
            const data= await res.json()
            this.setState({schedules: data.allSchedules})
            console.log(data)
            console.log(this.state.schedules)
        } catch (error) {
            console.log({error})
        }
    }


    setUpdatedSchedule = (e:any, schedule:any) => {
        this.setState({
            scheduleToUpdate: schedule,
            updatePressed: true
    })
    console.log(schedule)
}

    componentDidMount = () => {
        this.fetchScheds()
    }


 
    render() { 
        const schedMapper = () => {
            return this.state.schedules.map((schedule: any, index: any) => {
                return (
                    <Card className='schedcard m-5' style={{backgroundColor:' rgb(41, 61, 41)', color:'#bbabc2', opacity:'90%', fontFamily:'Faustina'}} key={index}>
                    
                    
                        <CardTitle className='schedcard-title m-3' scope='row' style={{fontSize:'15pt'}}>{schedule.task}</CardTitle>
                        <CardSubtitle className='schedcard-sub m-3' scope='row' style={{fontSize:'15pt'}}>{schedule.date}</CardSubtitle>
                        <CardBody className='schedcard-desc text-center' style={{backgroundColor:' rgb(224, 231, 224)', color:'#453c49', fillOpacity:'100%'}}> {schedule.desc}</CardBody>
                        <CardText className='schedcard-text text-center' style={{backgroundColor:' rgb(224, 231, 224)', color:'#453c49', fillOpacity:'100%'}}>{schedule.empAssign}</CardText>
                        <CardFooter className='schedcard-footer text-center'><Row className='schedcard-button'><Col><ScheduleEdit schedule={schedule} token={this.props.token} fetchScheds={this.fetchScheds}/></Col>
                       <Col><ScheduleDelete token={this.props.token} fetchScheds={this.fetchScheds} schedule={schedule}/></Col></Row></CardFooter>
                    </Card>
                )
            })
        }
        return ( 
            <>
        
          <Container>
              <Row>
                  <Col>
                   {schedMapper()}  
                  </Col>
              </Row>
              <Col md='12'>
              </Col>
          </Container>
            </>
         );
    }
}
 
  export default SchedDisplay;