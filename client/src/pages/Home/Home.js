// C.M - imported the Grid elements and react for the page
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {BookInput, BookTextArea} from "../../components/BookForm";
import {BookBtn} from "../../components/BookBtn";
// import {BookSection} from "../../components/BookSection";
import {DeleteBtn} from "../../components/DeleteBtn";
import {ProjectTextArea} from "../../components/ProjectOutline";
import {AddSectionBtn} from "../../components/AddSectionBtn";
import { Column, Col3, Col4, Row1, MainContainer, Container1, Article, Section, BookContainer,OutlineContainer} from "../../components/Grid";
import {NavBar} from "../../components/Nav";
import {List, ListItem} from "../../components/List"
import API from "../../utils/API";

// C.M. - Setup the general outline of the Home page for the Books and Project sections
class Home extends Component {
    state = {
        currentUser: "",
        title: "",
        author: "",
        publisher: "",
        pubDate: "",
        pageNum: "",
        quote: "",
        projectId: "",
        outline: "",
        projectIdOutline: "",
        bquoteResult: [],
        outlineResult: []
    }

    componentDidMount(id) {
        console.log("I'm on the home page!");
        this.loadBooks(id);
      }
    
    
    //   createBookQuotes = () => {
    //     API.createbQuote()
    //       .then(res =>
    //         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //       )
    //       .catch(err => console.log(err));
    //   };

    loadBooks = (id) => {
        console.log("Inside loadBooks", id);
        API.getAllBookQuotes(id)
         .then(res =>{
           if(res.data.statusCode === 401){
                console.log("There's an error!", res.data);
                 this.props.history.push("/login");
            } else {
                console.log("user:", res);
                var qNames = [];
                res.data.results.forEach((result) => {
                    console.log("quotes", result.quote)
                    qNames.push(result.quote);
                });
                this.setState({currentUser: res.data.sess.passport.user, bquoteResult: res.data.results, title: "", author: "", publisher: "", pubDate: "", pageNum: "", quote: "", projectId: ""})
            }
         })    
        .catch(err => console.log(err));
    };

    loadOutline= (id) => {
        console.log("Inside loadOutline", id);
        API.getOutline(id)
         .then(res =>{
           if(res.data.statusCode === 401){
                console.log("There's an error!", res.data);
                 this.props.history.push("/login");
            } else {
                console.log("user:", res);
                var outlineNames = [];
                res.data.results.forEach((result) => {
                    console.log("outline", result.outline)
                   outlineNames.push(result.outline);
               });
                this.setState({currentUser: res.data.sess.passport.user, outlineResult: res.data.results, outline: "", projectIdOutline: ""})
            }
         })    
      .catch(err => console.log(err));
    };
    
    //   // Deletes a book from the database with a given id, then reloads books from the db
      deleteBookQuote = (id) => {
          console.log("beginning to delete");
        API.deleteBQuote(id)
           .then(res => this.loadBooks(id))
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      // When the form is submitted, use the API.saveBook method to save the book data
      // Then reload books from the database
      handleFormSubmit = (id) => {
        // event.preventDefault();
        console.log(id);
        if (this.state.title) {
          API.createbQuote({
            title: this.state.title,
            author: this.state.author,
            publisher: this.state.publisher,
            pubDate: this.state.pubDate,
            pageNum: this.state.pageNum,
            quote: this.state.quote,
            projectId: this.state.projectId
          })
            .then(res => this.loadBooks(id))
            .catch(err => console.log(err));
        }
      };
          // Then reload books from the database
    handleFormSubmitOutline = (id) => {
            if (this.state.outline) {
                API.createOutline({
               outline: this.state.outline,
               projectIdOutline: this.state.projectIdOutline
              })
                .then(res => this.loadOutline(id))
                .catch(err => console.log(err));
            }
          };
    // C.M. - should return the Books section on the left side of the screen and current project on the right side of the screen
    render() {
        return(
        <div>
        <NavBar />
        <MainContainer>
        <Container1>
        <Row1>
            <Col3></Col3>
            <Column>
                    <Section>
                    <h2 className = "mui--text-center allprojtitle">Book Citation</h2>
                    <BookContainer>
                    <BookInput 
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    label="Book Title (required)"
                    />
                    <BookInput 
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="author"
                    label="Author Name (required)"
                    />
                    <BookInput 
                    value={this.state.publisher}
                    onChange={this.handleInputChange}
                    name="publisher"
                    label="Publisher (required)"
                    />
                    <BookInput 
                    value={this.state.pubDate}
                    onChange={this.handleInputChange}
                    name="pubDate"
                    label="Publication Date (required)"
                    />
                    <BookInput 
                    value={this.state.pageNum}
                    onChange={this.handleInputChange}
                    name="pageNum"
                    label="Page Number (required)"
                    />
                    <BookTextArea 
                    value={this.state.quote}
                    onChange={this.handleInputChange}
                    name="quote"
                    label="Enter the quote here (required)"
                    />
                    <BookInput 
                    value={this.state.projectId}
                    onChange={this.handleInputChange}
                    name="projectId"
                    label="Enter the project name here (required)"
                    />
                    <BookBtn disabled= {!(this.state.title)}
                     onClick= {() => this.handleFormSubmit(this.state.projectId)}/>
                     </BookContainer>

                     {this.state.bquoteResult ? (
                        <Article>
                {this.state.bquoteResult.map(quote => (
                  <ListItem key={quote._id}>
                      <strong>
                        {quote.quote}
                      </strong>
                      <DeleteBtn 
                      onClick={() => this.deleteBookQuote(quote._id)}
                      />
                    </ListItem>
                ))}
              </Article>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Section>
        </Column>
                    <Column>
                    <Section>
                    <h2 className = "mui--text-center allprojtitle">Project Outline</h2>
                        <Article>
                        <OutlineContainer>
                            <BookInput
                            value={this.state.projectIdOutline}
                            onChange={this.handleInputChange}
                            name="projectIdOutline"
                            label="Enter the project name here (required)"/>
                            <ProjectTextArea 
                            value={this.state.outline}
                            onChange={this.handleInputChange}
                            name="outline"
                            label="Enter your thesis, sentences or quote"
                            />
                            <br></br>
                            <AddSectionBtn disabled= {!(this.state.outline)}
                            onClick= {() => this.handleFormSubmitOutline(this.state.projectIdOutline)}/>
                        </OutlineContainer>
                             {this.state.outlineResult ? (
                         <Article>
                 {this.state.outlineResult.map(outline => (
                   <ListItem key={outline._id}>
                       <strong>
                         {outline.outline}
                       </strong>
                     </ListItem>
                 ))}
               </Article>
             ) : (
               <h3>No Results to Display</h3>
             )}
                        </Article>
                    </Section>
                    </Column>
            </Row1>
        </Container1>
        </MainContainer>
        </div>
        );
    };
};

export default Home;