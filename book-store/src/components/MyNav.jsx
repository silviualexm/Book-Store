import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const NavBar = () => (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Book Store</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <NavDropdown title="Browse" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Romance</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Fantasy</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Horror</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">SciFi</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      </Navbar>
  
    </>
)

export default NavBar