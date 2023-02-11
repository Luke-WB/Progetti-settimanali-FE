import { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

class SecondCustomNav extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="trasparent" variant="dark">
        <Navbar.Brand id="ok" href="#home">
          <h2>TV Show</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Genres &nbsp;"
              className="btn btn-secondary rounded-0 p-0"
              id="basic-nav-dropdown"
              style={{ backgroundColor: "#221f1f", textDecoration: "none" }}
            >
              <NavDropdown.Item className="bottoncino text-white" id="ok" href="#action/3.1">
                Comedy
              </NavDropdown.Item>
              <NavDropdown.Item className="bottoncino text-white" id="ok" href="#action/3.2">
                Drama
              </NavDropdown.Item>
              <NavDropdown.Item className="bottoncino text-white" id="ok" href="#action/3.3">
                Thriller
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-border-all"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z"
                  fill="white"
                />
              </svg>
            </Nav.Link>
            <Nav.Link href="#deets">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-border-all"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z"
                  fill="white"
                />
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default SecondCustomNav;
