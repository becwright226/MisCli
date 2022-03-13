import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Auth.css";
import AuthMain from "./Navbar/AuthMain";

interface SignupProps {
  updateLocalStorage: (newToken: string, newRole: string) => void
clearLocalStorage: () => void
token: string
}

interface SignupState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

class Signup extends Component<SignupProps, SignupState> {
  constructor(props: SignupProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "BOH",
    };
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestObject = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    };
    try {
      const res = await fetch("http://localhost:2206/user/register", {
        method: "POST",
        body: JSON.stringify(requestObject),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      const data = await res.json();
      this.props.updateLocalStorage(data.token, data.user.role);

      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "BOH",
      });
    } catch (error) {
      console.log({ error });
    }
  };

  render() {
    return (
      <>
        {/* <AuthMain updateLocalStorage={this.props.updateLocalStorage} clearLocalStorage={this.props.clearLocalStorage} token={this.props.token} /> */}
        <div className="auth-main p-4" style={{alignItems:'center'}}>
          <Form onSubmit={this.handleSubmit} className="auth-form p-5">
            <h1 className="signhead text-center">Signup</h1>
            <FormGroup className="form text-center">
              <Label for="firstname">First Name</Label>
              <Input
                className="input text-center"
                style={{ backgroundColor: "burlywood", width: "75%", marginLeft: '13%' }}
                type="text"
                name="firstname"
                placeholder="enter first name"
                onChange={(e: any) =>
                  this.setState({ firstName: e.target.value })
                }
                value={this.state.firstName}
                minLength={1}
                required
              />
            </FormGroup>
            <FormGroup className="form text-center">
              <Label for="lastname">Last Name</Label>
              <Input
                className="input text-center"
                style={{ backgroundColor: "burlywood", width: "75%", marginLeft: '13%' }}
                type="text"
                name="lastname"
                placeholder="enter last name"
                onChange={(e: any) =>
                  this.setState({ lastName: e.target.value })
                }
                value={this.state.lastName}
                minLength={1}
                required
              />
            </FormGroup>
            <FormGroup className="form text-center">
              <Label for="email">Email</Label>
              <Input
                className="input-md"
                style={{ backgroundColor: "burlywood", width: "75%", marginLeft: '13%' }}
                type="email"
                name="email"
                placeholder="enter password"
                onChange={(e: any) => this.setState({ email: e.target.value })}
                value={this.state.email}
                required
              />
            </FormGroup>
            <FormGroup className="form text-center">
              <Label className="password">Password</Label>
              <Input
                className="input-md"
                style={{ backgroundColor: "burlywood", width: "75%", marginLeft: '13%' }}
                type="password"
                name="password"
                minLength={5}
                placeholder="enter password"
                onChange={(e: any) =>
                  this.setState({ password: e.target.value })
                }
                value={this.state.password}
                required
              />
            </FormGroup>
            <FormGroup className="form text-center">
              <Label for="role">Role</Label>
              <Input
                className="input-md"
                type="select"
                name="role"
                style={{ backgroundColor: "burlywood", width: "75%", marginLeft: '13%'}}
                placeholder="enter password"
                onChange={(e: any) => this.setState({ role: e.target.value })}
                value={this.state.role}
                required
              >
                <option style={{ backgroundColor: "burlywood" }}> BOH </option>
                <option style={{ backgroundColor: "burlywood" }}> FOH </option>
                <option style={{ backgroundColor: "burlywood" }}>
                  {" "}
                  Admin{" "}
                </option>
              </Input>
            </FormGroup>
            <Button type="submit" className="btn">
              {" "}
              Submit{" "}
            </Button>
            <br />
            <p>
              <a href="/login">Already a user? Sign-in</a>
            </p>
          </Form>
        </div>
      </>
    );
  }
}

export default Signup;
