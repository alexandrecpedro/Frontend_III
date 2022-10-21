import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Container, Col, ListGroup, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import Repository from './components/Repository';
import api from '../../services/api';

export const Home = () => {
  const [repositories, setRepositories] = useState([]);

  const handleSubmit = async ({ userName }) => {
    try {
      const response = await api.get(`/users/${userName}/repos`);
      setRepositories(response.data);
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }

  return (
    <>
      <Helmet>
        <title>GitHubble | {repositories[0] ? repositories[0].owner.login : 'Home'}</title>
      </Helmet>
      <Container className="my-3 text-center">
        <Col md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
          <h2>Search a Github user to see its repositories</h2>
          <Formik initialValues={{ userName: '' }} onSubmit={handleSubmit}>
            <Form>
              <Field placeholder="Enter a username" required type="text" name="userName" id="userName" className="form-control" />
              <Button type="submit" variant="primary" className="my-3">Search</Button>
            </Form>
          </Formik>
        </Col>
      </Container>
      <Col md={{ span: 6, offset: 4 }} sm={{ span: 10, offset: 1 }}>
        {repositories.length !== 0 && (
          <ListGroup as="ol" numbered className="my-3">
            <Link to={`/user/${repositories[0].owner.login}`}>More details about {repositories[0].owner.login}</Link>
            {repositories.map(({ id, name, full_name }) => {
              return (
                <Repository id={id} name={name} full_name={full_name} />
              )
            })}
          </ListGroup>
        )}
      </Col>
    </>
  );
}