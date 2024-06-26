import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import fakeAuth from '../../utils/fakeAuth';
import { useEffect, useState } from 'react';

function MyNav() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsAuthenticated(fakeAuth.isAuthenticated);
  });

/*   const logout = () => {
    fakeAuth.signOut(() => {
      // Redirect to home page after logout
      navigate('/');
    });
  }; */

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/xssattack">XSS</Nav.Link>
            <Nav.Link href="/csp">CSP</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
            {!fakeAuth.isAuthenticated ?<NavDropdown.Item href="/login">Login</NavDropdown.Item >: <NavDropdown.Item href="/">Logout</NavDropdown.Item > }
              <NavDropdown.Item href="/xssattack">XSS</NavDropdown.Item>
              <NavDropdown.Item href="/csp">CSP</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;