// C.M - imported the Grid elements and react for the page
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {BookInput, TextBox, BookModal} from "../../components/BookModal";
import {BookBtn} from "../../components/BookBtn";
import {ArticleBtn} from "../../components/ArticleBtn";
import { Col, Row, Container, Article, Section } from "../../components/Grid";
// import Nav from "../../components/Nav";

// C.M. - Setup the general outline of the Home page for the Book, Article and Project sections
class Home extends Component {
    state = {

    }
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
                            Each Book Goes Here 
                            <br></br>
                            <BookBtn    
                            >
                                Add New Book
                            </BookBtn>
                        </Article>
                    </Section>
                </Col>
            </Row>
            <Row>
                <Col size="md-7" className="ouline-list">
                    <Section>
                    Essay Outline
                        <Article>
                            Each Project Goes Here
                        </Article>
                    </Section>
                </Col>
            </Row>
            <Row>
                <Col size="md-4" className="article-list">
                    <Section>
                    Articles
                        <Article>
                            Each Article Goes Here
                            <br></br>
                            <ArticleBtn>
                            </ArticleBtn>
                        </Article>
                    </Section>
                </Col>
            </Row>
        </Container>
        </div>
        );
    };
};

export default Home;