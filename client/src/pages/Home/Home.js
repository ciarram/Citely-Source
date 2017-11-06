// C.M - imported the Grid elements and react for the page
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {BookInput, BookTextArea} from "../../components/BookForm";
import {BookBtn} from "../../components/BookBtn";
// import {BookSection} from "../../components/BookSection";
import {ArticleInput, ArticleTextArea} from "../../components/ArticleForm";
import {ArticleBtn} from "../../components/ArticleBtn";
import {ProjectTextArea} from "../../components/ProjectOutline";
import { Col, Row, Container, Article, Section } from "../../components/Grid";
import {Nav} from "../../components/Nav";

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
        <Nav />
        <Container>
            <Row>
                <Col size="md-4" className="book-list">
                    <Section>
                    Books
                    <br></br>
                    <BookInput 
                    name="title"
                    placeholder="Book Title (required)"
                    />
                    <BookInput 
                    name="author"
                    placeholder="Author Name (required)"
                    />
                    <BookInput 
                    name="publisher"
                    placeholder="Publisher (required)"
                    />
                    <BookInput 
                    name="pubDate"
                    placeholder="Publication Date (required)"
                    />
                    <BookInput 
                    name="pageNum"
                    placeholder="Page Number (required)"
                    />
                    <BookTextArea 
                    name="quote"
                    placeholder="Enter the quote here (required)"
                    />
                    <BookBtn>
                    </BookBtn>
                        <Article>
                            {/* <BookSection> */}
                            Each Book Goes Here
                            {/* </BookSection>  */}
                        </Article>
                    </Section>
                </Col>
                <Col size="md-6" className="ouline-list">
                    <Section>
                        Essay Outline
                        <ProjectTextArea />
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
                    <br></br>
                    <ArticleInput 
                        name="articleName"
                        placeholder="Article Title (required)"
                    /> 
                    <ArticleInput 
                        name="author"
                        placeholder="Author Name (optional)"
                    />
                    <ArticleInput 
                        name="siteName"
                        placeholder="Website Name (required)"
                    />
                    <ArticleInput 
                        name="version"
                        placeholder="Version (optional)"
                    />
                    <ArticleInput 
                        name="number"
                        placeholder="Number (optional)"
                    />
                    <ArticleInput 
                        name="publisher"
                        placeholder="Publisher (optional)"
                    />
                    <ArticleInput 
                        name="pubDate"
                        placeholder="Published Date (optional)"
                    />
                    <ArticleInput 
                        name="url"
                        placeholder="URL (required)"
                    />
                    <ArticleInput 
                        name="accessDate"
                        placeholder="Date You Accessed Site (required)"
                    />
                    <ArticleTextArea 
                        name="quote"
                        placeholder="Enter quote here (required)"
                    />   
                    <ArticleBtn>
                    </ArticleBtn>
                        <Article>
                            Each Article Goes Here
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