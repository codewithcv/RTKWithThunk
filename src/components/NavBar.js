import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Redux Tool-Kit with Thunk</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>
              Products
            </Nav.Link>
          </Nav>
          <Nav className="me-auto justify-content-end">
            <Nav.Link to="/Cart" as={Link}>
              My Bag 0
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
