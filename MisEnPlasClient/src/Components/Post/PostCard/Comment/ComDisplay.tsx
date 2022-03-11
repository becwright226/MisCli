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
import ComEdit from "./ComEdit";
import ComDelete from "./ComDelete";


interface ComDisplayProps {
  token: string;
  trigger: boolean;
  post: postData
}

interface postData {
    id: string,
    date: string,
   title: string,
   content: string
   role: string
   model: boolean
}

interface ComDisplayState {
  comments: object[];
  updatePressed: boolean;
  commentToUpdate: object;
}

class ComDisplay extends Component<ComDisplayProps, ComDisplayState> {
  constructor(props: ComDisplayProps) {
    super(props);
    this.state = {
      comments: [],
      updatePressed: false,
      commentToUpdate: {},
    };
  }

  fetchComments = async () => {
    try {
      const res = await fetch(`http://localhost:2206/comment/${this.props.post.id}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: String(localStorage.getItem("token")),
        }),
      });
      const data = await res.json();
      this.setState({ comments: data });
      console.log(data);
      console.log(this.state.comments);
    } catch (error) {
      console.log({ error });
    }
  };

  setUpdatedComment = (e: any, comment: any) => {
    this.setState({
      commentToUpdate: comment,
      updatePressed: true,
    });
    console.log(comment);
  };

  componentDidUpdate(
    prevProps: ComDisplayProps,
    prevState: ComDisplayState
  ) {
    if (this.props.trigger != prevProps.trigger) {
      this.fetchComments();
    }
  }

  componentDidMount = () => {
    this.fetchComments();
  };

  render() {
    const commentMapper = () => {
      return this.state.comments.map((comment: any, index: any) => {
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
    style={{ fontSize: "15pt" }}>User Comment</Accordion.Header>      
    </Col>
         </Row>

    <Accordion.Body
     className="postcard-content text-center"
     style={{
    backgroundColor: " rgb(224, 231, 224)",
    color: "black",
    fillOpacity: "100%"}}>
        {comment.date}
      {comment.content}
      <Row>
    <Col>
    
    <ComEdit
               comment={comment}
               token={this.props.token}
               fetchComments={this.fetchComments}
             />
    </Col>
    <Col>
    <ComDelete
               token={this.props.token}
               fetchComments={this.fetchComments}
              comment={comment}
             />
    </Col>
    </Row>

    </Accordion.Body>
   
    {/* <Row className="postcard-button">
             
                  <ComEdit
                    comment={comment}
                    token={this.props.token}
                    fetchComments={this.fetchComments}
                  />
                  <ComDelete
                    token={this.props.token}
                    fetchComments={this.fetchComments}
                   comment={comment}
                  />
               
              </Row> */}

    </Accordion.Item>
    </Accordion>


           
        );
      });
    };
    return (
      <>
        <Container>
          <Row>
            <Col>{commentMapper()}</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ComDisplay;