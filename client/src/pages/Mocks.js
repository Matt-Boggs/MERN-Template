import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Mocks() {
  // Setting our component's initial state
  const [mocks, setMocks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all mocks and store them with setMocks
  useEffect(() => {
    loadMocks()
  }, [])

  // Loads all mocks and sets them to mocks
  function loadMocks() {
    API.getMocks()
      .then(res => 
        setMocks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a mock from the database with a given id, then reloads mocks from the db
  function deleteMock(id) {
    API.deleteMock(id)
      .then(res => loadMocks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the mock data
  // Then reload mocks from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name) {
      API.saveMock({
        name: formObject.name
        // other: formObject.other,
        // other2: formObject.other2
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Look at these mocks</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="name"
              placeholder="name (required)"
            />
            {/* <Input
              onChange={handleInputChange}
              name="other"
              placeholder="other (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="other2"
              placeholder="other2 (Optional)"
            /> */}
            <FormBtn
              disabled={!(formObject.name)}
              onClick={handleFormSubmit}
            >
              Submit Mock
            </FormBtn>
          </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Mocks On My List</h1>
            </Jumbotron>
            {mocks.length ? (
              <List>
                {mocks.map(mock => (
                  <ListItem key={mock._id}>
                    <Link to={"/mocks/" + mock._id}>
                      <strong>
                        {mock.name}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteMock(mock._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Mocks;
