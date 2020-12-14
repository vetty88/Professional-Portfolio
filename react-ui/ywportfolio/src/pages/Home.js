import React from "react";
import { Col, Row, Container } from "../components/Grid";
import RepoList from "../components/RepoList";

const Home = () => {
  return (
    
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <RepoList/>
        </Col>
      </Row>
    </Container>
    
  );
};

export default Home;
