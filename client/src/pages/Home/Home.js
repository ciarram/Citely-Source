import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";

class Home extends Component {

    render() {
        return(
        <div>
        <Nav />
        <Container>
            <Row>
                <Col size="md-4">

                </Col>
            </Row>
            <Row>
                <Col size="md-8">
                
                </Col>
            </Row>
            <Row>
                <Col size="md-4">

                </Col>
            </Row>
        </Container>
        </div>
        );
    };
};