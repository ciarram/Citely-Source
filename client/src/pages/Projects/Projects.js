import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import {Nav} from "../../components/Nav";
import {Input, LoginBtn} from "../../components/Login";
// import API from "../../utils/API";

class ProjectFolder extends Component {
  state = {
    projectName: "",
    password: "",
    currentUser: ""
  };

    render (){
        return(
            <div>
            <Nav/>
            <Container fluid>
                <Row>
                <Col size="md-12">
              {/* <form> */}
                  <h2>New Project</h2>
                {/* <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <Input
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  name="author"
                  placeholder="Author (required)"
                />
                <TextArea
                  value={this.state.synopsis}
                  onChange={this.handleInputChange}
                  name="synopsis"
                  placeholder="Synopsis (Optional)"
                />
                <FormBtn
                  disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Book
              </FormBtn> */}
              {/* </form> */}
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <h2>Projects Completed</h2>
              {/* {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem key={book._id}>
                      <Link to={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                  <h3>No Results to Display</h3>
                )} */}
            </Col>
          </Row>
        </Container>
            </div>
        );
    };
};

export default ProjectFolder;