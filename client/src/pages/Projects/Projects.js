import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Column, Col2, Col3, Col4, MainContainer, Row1, Container1, Section } from "../../components/Grid";
import {NavBar} from "../../components/Nav";
import {ProjectInput, SubmitBtn} from "../../components/ProjectForm";
import {List, ListItem} from "../../components/List"
// import {Input, LoginBtn} from "../../components/Login";
import API from "../../utils/API";

class ProjectFolder extends Component {
  state = {
    projectName: "",
    currentUser: "",
    projectResult: []
  };

      componentDidMount() {
        console.log("project page");
        this.loadProjects();
      }
    
    
      loadProjects = () => {
        API.getProjects()
          .then(res => {
            if(res.data.statusCode === 401){
              console.log("There's an error!", res.data);
              this.props.history.push("/login");
            } else {
              console.log("user:", res.data);
              var pNames = [];
              res.data.results.forEach((result) => {
                console.log("Pnames: " + result.projectName)
                pNames.push(result.projectName);
              })
              console.log(res.data.results)
               this.setState({currentUser: res.data.sess.passport.user, 
                projectResult: res.data.results, projectName: "" })

            
              }
          })
          .catch(err => console.log(err));
      };

      // projectList = () => {
      //   if(this.state.projectResult){

      //   }
      // }
    
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
            <NavBar/>
            <MainContainer>
            <Container1 fluid>
              <Row1>
                <Column></Column>
                <Column>
                  <h2 className = "mui--text-center">New Project</h2>
                  <ProjectInput 
                    value={this.state.projectName}
                    onChange={this.handleInputChange}
                    name="projectName"
                    label="Enter the name of your project here (required)"
                  />
                  <Col4></Col4>
                  <Col4></Col4>
                  <SubmitBtn
                    disabled= {!(this.state.projectName)}
                    onClick= {this.handleFormSubmit}
                  />
                  <Col4></Col4>
                  <Col4></Col4>
            </Column>
            <Column></Column>
            </Row1>
            <Row1>
            <Col3></Col3>
            <Col2> 
              <h2 className = "mui--text-center">All Projects</h2>
              {this.state.projectResult ? (
              <Section>
                {this.state.projectResult.map(project => (
                 <Column>
                  <ListItem key={project._id}>
                    <Link to={"/home/" + project._id}>
                      <strong>
                        {project.projectName}
                      </strong>
                    </Link>
                  </ListItem> 
                  </Column>
                ))}
              </Section>
            ) : (
              <h3>No Results to Display</h3>
            )} 
            </Col2>
          <Col3></Col3>
          </Row1>
        </Container1>
        </MainContainer>
            </div>
        );
    };
};

export default ProjectFolder;