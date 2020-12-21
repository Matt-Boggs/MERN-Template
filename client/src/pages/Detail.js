import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [mock, setMock] = useState({})

  // When this component mounts, grab the mock with the _id of props.match.params.id
  // e.g. localhost:3000/mocks/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getMock(id)
      .then(res => setMock(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {mock.name}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>other2</h1>
              <p>
                {/* {mock.other2} */} Example
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back home</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
