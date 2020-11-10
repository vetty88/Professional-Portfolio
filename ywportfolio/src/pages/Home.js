import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateProjectForm from "../components/CreateProjectForm";
import ProjectsList from "../components/ProjectsList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <CreateProjectForm />
        </Col>
        <Col size="md-6 sm-12">
          <ProjectsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
