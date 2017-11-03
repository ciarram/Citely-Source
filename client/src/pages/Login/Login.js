import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import {Input, LoginBtn} from "../../components/Login";

class LoginForm extends Component {
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Input>
                            Username
                        </Input>
                    </Row>
                    <Row>
                        <Input>
                            Password
                        </Input>
                    </Row>
                    <Row>
                        <Input>
                            <LoginBtn />
                        </Input>
                    </Row>
                </Container>
            </div>
        );
    };
};

export default LoginForm;