import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Container, ListGroup, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import api from "../../services/api";

import "./style.scss";

export const UserDetails = () => {
  const [user, setUser] = useState({});
  const { userName } = useParams();
  const navigate = useNavigate();

  const getUserData = useCallback(
    async ({ username }) => {
      if (userName !== username && username !== "") {
        navigate(`/user/${username}`);
        return;
      }
      try {
        const response = await api.get(`users/${username}`);
        setUser(response.data);
      } catch (error) {
        Swal.fire({
          title: error.response.status,
          icon: "error",
          text: error.response.data.message,
        });
      }
    },
    [navigate, userName]
  );

  useEffect(() => {
    if (userName) {
      getUserData({ username: userName });
    }
  }, [getUserData, userName]);

  return (
    <>
      <Helmet>
        <title>GitHubble | {userName}</title>
      </Helmet>
      <section id="user">
        <Container className="my-3 text-center">
          <Col md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
            <h2>Search a Github user see its information</h2>
            <Formik initialValues={{ username: "" }} onSubmit={getUserData}>
              <Form>
                <Field
                  placeholder="Enter a username"
                  required
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                />
                <Button type="submit" variant="primary" className="my-3">
                  Search
                </Button>
              </Form>
            </Formik>
            {user.login && (
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  <img src={user.avatar_url} alt={`Foto do ${user.login}`} />
                </ListGroup.Item>
                <ListGroup.Item as="li">Login: {user.login}</ListGroup.Item>
                <ListGroup.Item as="li">Bio: {user.bio}</ListGroup.Item>
                <ListGroup.Item as="li">Site: {user.blog}</ListGroup.Item>
                <ListGroup.Item as="li">
                  <a href={user.html_url} className="btn btn-secondary">
                    Profile
                  </a>
                </ListGroup.Item>
              </ListGroup>
            )}
          </Col>
        </Container>
      </section>
    </>
  );
};
