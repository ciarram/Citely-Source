// C.M - imported the Grid elements and react for the page
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container, Article, Section } from "../../components/Grid";
// import Nav from "../../components/Nav";

// C.M. - Setup the general outline of the Home page for the Book, Article and Project sections
class Home extends Component {
    // state = {

    // }
    // C.M. - should return the Books and Article sections on the left side of the screen and current project on the right side of the screen
    render() {
        return(
        <div>
        {/* <Nav /> */}
        <Container>
            <Row>
                <Col size="md-4" className="book-list">
                    <Section>
                    Books
                        <Article>
                        </Article>
                    </Section>
                </Col>
            </Row>
            <Row>
                <Col size="md-7" className="ouline-list">
                    <Section>
                    Essay Outline
                        <Article>
                        </Article>
                    </Section>
                </Col>
            </Row>
            <Row>
                <Col size="md-4" className="article-list">
                    <Section>
                    Articles
                        <Articles>
                        </Articles>
                    </Section>
                </Col>
            </Row>
        </Container>
        </div>
        );
    };
};

export default Home;