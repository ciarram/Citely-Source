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
        booktitle: ""
    }

    // componentDidMount() {
    //     this.loadBookQuotes();
    //   }
    
    //   // Loads all books  and sets them to this.state.books
    //   loadBookQuotes = () => {
    //     API.getBooks()
    //       .then(res =>
    //         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //       )
    //       .catch(err => console.log(err));
    //   };
    
    //   // Deletes a book from the database with a given id, then reloads books from the db
    //   deleteBook = id => {
    //     API.deleteBook(id)
    //       .then(res => this.loadBooks())
    //       .catch(err => console.log(err));
    //   };
    
    //   // Handles updating component state when the user types into the input field
    //   handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //       [name]: value
    //     });
    //   };
    
    //   // When the form is submitted, use the API.saveBook method to save the book data
    //   // Then reload books from the database
    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.title && this.state.author) {
    //       API.saveBook({
    //         title: this.state.title,
    //         author: this.state.author,
    //         synopsis: this.state.synopsis
    //       })
    //         .then(res => this.loadBooks())
    //         .catch(err => console.log(err));
    //     }
    //   };
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