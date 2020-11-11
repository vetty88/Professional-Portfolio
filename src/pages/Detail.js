import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_PROJECT } from "../utils/actions";

const Detail = props => {
      const [state, dispatch] = useStoreContext();

      useEffect(() => {
                  API.getProject(props.match.params.id)
                      .then(res => dispatch({
                          type: SET_CURRENT_PROJECT,  project: res.data }))
                      .catch(err => console.log(err));
                    }, []);

                  return ( 
                  <> {state.currentProject ? (
                    
                    <Container fluid>
                      <Row>
                        <Col size="md-12">
                          <Jumbotron>
                            <h1> {state.currentProject.title} </h1>
                          </Jumbotron>
                        </Col>
                      </Row>
                      <Row>
                        <Col size="md-10 md-offset-1">
                          <article>
                            <h1> Content: </h1>
                              <p> {state.currentProject.description} </p>
                          </article>
                        </Col>
                      </Row>
                      <Row>
                        <Col size="md-2">
                          <Link to="/"> ←Back to PROJECTS </Link> 
                        </Col>
                      </Row>
                    </Container>
                    
         ) : (
          <div>loading...</div>
        )}</>
      );
    };                                                  

                          export default Detail;