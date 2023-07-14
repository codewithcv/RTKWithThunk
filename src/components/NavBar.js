import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const cartCount = useSelector((state) => state.cart);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Redux Tool-Kit with Thunk</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>
              Products
            </Nav.Link>
          </Nav>
          <Nav className="me-auto justify-content-end">
            <Nav.Link to="/Cart" as={Link}>
              My Bag {cartCount.length}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
