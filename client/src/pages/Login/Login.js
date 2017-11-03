import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import {Input, LoginBtn} from "../../components/Login";

class LoginForm extends Component {
    render(){
        return(
            <div>
                <Container>
                <form>
                    <Row>
                        <Input
                        name="username"
                        placeholder="username (required)"
                        />
                    </Row>
                    <Row>
                        <Input
                        name="password"
                        type="password"
                        placeholder="password (required)"
                        />
                    </Row>
                    <Row>
                     <LoginBtn> Login </LoginBtn>
                    </Row>
                    </form>
                </Container>
            </div>
        );
    };
};

export default LoginForm;