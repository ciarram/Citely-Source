import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row1, Container1, Column } from "../../components/Grid";
import {Input, LoginBtn} from "../../components/Login";
import {SignupBtn} from "../../components/Register";
import API from "../../utils/API";

class LoginForm extends Component {
    state = {
        username: "",
        password: "",
        currentUser: ""
      };

      componentWillMount() {
        API.logout()
          .catch(err => console.log(err))
      }
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
          API.login({
            username: this.state.username,
            password: this.state.password
          })
            .then(res => {
              if (res.data.user) {
                this.props.history.push('/projects');
              }
              else {
                console.log("no user");
              }
            })
            .catch(err => console.log(err));
        }
      };

      handleFormRegister = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
          API.register({
            username: this.state.username,
            password: this.state.password
          })
            .then(res => {
              if (res.data.user) {
                this.props.history.push('/projects');
              }
              else {
                console.log("no user");
              }
            })
            .catch(err => console.log(err));
        }
      };

    render(){
        return(
            <div>
              <Column size="4"></Column>
              {/* <Col size="6"> */}
                <Container1>
                  <h1>Paper Helper</h1>
                </Container1>
                {/* </Col> */}
                <Column size="4"></Column>
                <Container1>
                <form>
                    <Row1>
                        <Input
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="username (required)"
                        />
                    </Row1>
                    <Row1>
                        <Input
                        onChange={this.handleInputChange}
                        name="password"
                        type="password"
                        placeholder="password (required)"
                        />
                    </Row1>
                    <Row1>
                     <LoginBtn disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}> Login </LoginBtn>
                      <br></br><br></br>
                      <SignupBtn onClick={this.handleFormRegister}>
                        Sign Up
                      </SignupBtn>
                    </Row1>
                    </form>
                </Container1>
            </div>
        );
    };
};

export default LoginForm;