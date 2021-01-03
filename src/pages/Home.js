import React from "react";
import Header from "./components/Header";
import { Col, Row, Container } from "../components/Grid";
import RepoList from "./components/RepoList";
import Footer from "./components/Footer";
import "./App.css"; 

class Home extends React.Component {
  render () {
  <div>
  <Header />
  </div>

    <div>
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
        <RepoList />
        </Col>
      </Row>
    </Container>
    </div>

  <div>
  <Footer />
  </div>

  );
}

export default Home;
