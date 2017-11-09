import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row1, Container1 } from "../../components/Grid";
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
            console.log("INSIDE handleFormSubmit")  //TEST            
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
        <Container1 fluid>
          <Row1>
            {/* <Col size="md-12"> */}
              {/* <Jumbotron> */}
                {/* <h1>
                  Register
                </h1>
              </Jumbotron> */}
            {/* </Col> */}
          </Row1>
          <Row1>
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
          </Row1>
        </Container1>
      </div>
    );
  }
}

export default Register;