import React, { useState, useEffect, Component } from "react";
import { GiAccordion } from "react-icons/gi";
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardTitle,
  CardFooter,
  Button,
  CardSubtitle,
  UncontrolledCollapse,
  CardHeader,
} from "reactstrap";
import {Accordion} from 'react-bootstrap'
import LogEdit from "./LogEdit";
import LogDelete from "./LogDelete";



interface LogDisplayProps {
  token: string;
  trigger: boolean;
  schedule: schedData
}

interface schedData {
    id: string,
    date: string,
    task: string,
    desc: string,
    empAssign?: string
    model: boolean
}

interface LogDisplayState {
  logs: object[];
  updatePressed: boolean;
  logToUpdate: object;
}

class LogDisplay extends Component<LogDisplayProps, LogDisplayState> {
  constructor(props: LogDisplayProps) {
    super(props);
    this.state = {
      logs: [],
      updatePressed: false,
      logToUpdate: {},
    };
  }

  fetchLogs = async () => {
    try {
      const res = await fetch(`http://localhost:2206/log/${this.props.schedule.id}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: String(localStorage.getItem("token")),
        }),
      });
      const data = await res.json();
      this.setState({ logs: data });
      console.log(data);
      console.log(this.state.logs);
    } catch (error) {
      console.log({ error });
    }
  };

  setUpdatedLog = (e: any, log: any) => {
    this.setState({
      logToUpdate: log,
      updatePressed: true,
    });
    console.log(log);
  };

  componentDidUpdate(
    prevProps: LogDisplayProps,
    prevState: LogDisplayState
  ) {
    if (this.props.trigger != prevProps.trigger) {
      this.fetchLogs();
    }
  }

  componentDidMount = () => {
    this.fetchLogs();
  };

  render() {
    const logMapper = () => {
      return this.state.logs.map((log: any, index: any) => {
        return (

<>

    <Row className="postcard-button">
        <Col>
        <Button
    className="postcard-title m-2 pl-4 pr-4"
    id='toggler'
    
    
    style={{
      backgroundColor: "#ac7b53",
      color: "black",
      opacity: "90%",
      fontFamily: "Faustina",
    }}
    key={index}
    >Work Log</Button>      
    </Col>
         </Row>
<UncontrolledCollapse toggler="#toggler">

<Card>
<CardHeader>{log.date}----{log.time}min to complete</CardHeader>
  <CardBody
  className="postcard-content text-center"
  style={{
 backgroundColor: " rgb(224, 231, 224)",
 color: "black",
 fillOpacity: "100%"}}
  >
      {log.task}
      <Row>
    <Col>
    
    <LogEdit
               log={log}
               token={this.props.token}
               fetchLogs={this.fetchLogs}
             />
    </Col>
    </Row>
    <Row>
    <Col>
    <LogDelete
               token={this.props.token}
               fetchLogs={this.fetchLogs}
               log={log}
             />
    </Col>
    </Row>
  </CardBody>
</Card>

</UncontrolledCollapse>


</>




           
        );
      });
    };
    return (
      <>
        <Container>
          <Row>
            {logMapper()}
          </Row>
        </Container>
      </>
    );
  }
}

export default LogDisplay;