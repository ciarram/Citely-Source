import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import {Nav} from "../../components/Nav";
import {ProjectInput, SubmitBtn} from "../../components/ProjectForm";
// import {Input, LoginBtn} from "../../components/Login";
import API from "../../utils/API";

class ProjectFolder extends Component {
  state = {
    projectName: "",
    currentUser: ""
  };

      // componentDidMount() {
      //   this.loadProjects();
      // }
    
    
      loadProjects = () => {
        API.getProjects()
          .then(res => {
            if(res.data.statusCode === 401){
              this.props.history.push("/login");
            } else {
              console.log("user:", res.data.sess);
              this.setState({currentUser: res.data.sess.passport.user, projectName: res.data.results})
            }
          })
          .catch(err => console.log(err));
      };
    
      // Deletes a book from the database with a given id, then reloads books from the db
      deleteProject = id => {
        API.deleteProject(id)
          .then(res => this.loadProjects())
          .catch(err => console.log(err));
      };
    
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
  //   // When the form is submitted, use the API.saveBook method to save the book data
  //   // Then reload books from the database
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.projectName) {
        API.createProject({
          projectName: this.state.projectName
        })
          .then(res => this.loadProjects())
          .catch(err => console.log(err));
      }
    };

    render (){
        return(
            <div>
            <Nav/>
            <Container fluid>
                <Row>
                <Col size="md-12">
                  <h2>New Project</h2>
                  <ProjectInput 
                    value={this.state.projectName}
                    onChange={this.handleInputChange}
                    name="projectName"
                    placeholder="Enter the name of your project here (required)"
                  />
                  <SubmitBtn 
                    disabled= {!(this.state.projectName)}
                    onClick= {this.handleFormSubmit}
                  />
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