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
} from "reactstrap";
import {Accordion} from 'react-bootstrap'
import LogEdit from "./LogEdit";



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

    <Accordion
    className="postcard m-5"
            style={{
              backgroundColor: " rgb(41, 61, 41)",
              color: "#bbabc2",
              opacity: "90%",
              fontFamily: "Faustina",
            }}
            key={index}>
    <Accordion.Item eventKey="0">
    <Row className="postcard-button">
        <Col>
        <Accordion.Header
    className="postcard-title p-2"
    // scope="row"
    style={{ fontSize: "15pt" }}>Work Log</Accordion.Header>      
    </Col>
         </Row>

    <Accordion.Body
     className="postcard-content text-center"
     style={{
    backgroundColor: " rgb(224, 231, 224)",
    color: "black",
    fillOpacity: "100%"}}>
        {log.date}
        {log.time}
      {log.desc}
      <Row>
    <Col>
    
    <LogEdit
               log={log}
               token={this.props.token}
               fetchLogs={this.fetchLogs}
             />
    </Col>
    <Col>
    {/* <LogDelete
               token={this.props.token}
               fetchLogs={this.fetchLogs}
               log={log}
             /> */}
    </Col>
    </Row>

    </Accordion.Body>

    </Accordion.Item>
    </Accordion>


           
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