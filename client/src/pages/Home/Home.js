import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import Nav from "../../components/Nav";

class Home extends Component {

    render() {
        return(
        <div>
        {/* <Nav /> */}
        <Container>
            <Row>
                <Col size="md-4" className="book-list">
                Books
                </Col>
            </Row>
            <Row>
                <Col size="md-7" className="ouline-list">
                Essay Outline
                </Col>
            </Row>
            <Row>
                <Col size="md-4" className="article-list">
                Articles
                </Col>
            </Row>
        </Container>
        </div>
        );
    };
};

export default Home;