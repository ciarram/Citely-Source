import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import {Input, SignupBtn} from "../../components/Register";
import API from "../../utils/API";

class Register extends Component {
  state = {
    username: "",
    password: "",
    currentUser: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.register({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => {
          if(res.data.user){
            this.props.history.push('/projects');
          }
          else {
            console.log("no user");
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        {/* <Nav userInfo={this.state.currentUser} /> */}
        <Container fluid>
          <Row>
            {/* <Col size="md-12"> */}
              {/* <Jumbotron> */}
                {/* <h1>
                  Register
                </h1>
              </Jumbotron> */}
            {/* </Col> */}
          </Row>
          <Row>
            <form>
              <Input
                onChange={this.handleInputChange}
                name="username"
                placeholder="username (required)"
              />
              <Input
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="password (required)"
              />
              <SignupBtn
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Login
              </SignupBtn>
            </form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;