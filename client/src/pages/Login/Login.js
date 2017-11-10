import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row1, MainContainer, FormContainer, Container1, Column, Col3 } from "../../components/Grid";
import {InputLogin, LoginBtn} from "../../components/Login";
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
              {/* <Column size="4"></Column> */}
              {/* <Col size="6"> */}
              <MainContainer>
                <Container1>
                  <h1 className = "mui--text-center mui--text-display3 titlelog">Citely Source</h1>
                </Container1>
                {/* </Col> */}
                <Column></Column>
                <Column>
                <Container1>
                <FormContainer>
                <form>
                    <Row1>
                        <InputLogin
                        onChange={this.handleInputChange}
                        name="username"
                        label="username (required)"
                        />
                    </Row1>
                    <Row1>
                        <InputLogin
                        onChange={this.handleInputChange}
                        name="password"
                        type="password"
                        label="password (required)"
                        />
                    </Row1>
                    <Row1>
                      <Col3></Col3>
                     <LoginBtn disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}> Login </LoginBtn>
                      <Col3> </Col3>
                      <br></br><br></br>
                      <Col3></Col3>
                      <SignupBtn onClick={this.handleFormRegister}>
                        Sign Up
                      </SignupBtn>
                      <Col3></Col3>
                    </Row1>
                    </form>
                </FormContainer>  
                </Container1>
                </Column>
                </MainContainer>
            </div>
        );
    };
};

export default LoginForm;