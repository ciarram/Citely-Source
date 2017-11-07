import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
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

    render(){
        return(
            <div>
                <Container>
                <form>
                    <Row>
                        <Input
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="username (required)"
                        />
                    </Row>
                    <Row>
                        <Input
                        onChange={this.handleInputChange}
                        name="password"
                        type="password"
                        placeholder="password (required)"
                        />
                    </Row>
                    <Row>
                     <LoginBtn disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}> Login </LoginBtn>
                      <br></br><br></br>
                      <SignupBtn>
                        Sign Up
                      </SignupBtn>
                    </Row>
                    </form>
                </Container>
            </div>
        );
    };
};

export default LoginForm;