import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Repos from "../components/Repos";

const Home = () => {
  return (
    
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <Repos/>
        </Col>
      </Row>
    </Container>
    
  );
};

export default Home;
