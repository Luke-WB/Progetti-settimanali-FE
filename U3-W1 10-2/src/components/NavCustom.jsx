import { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

class NavCustom extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="trasparent" variant="dark">
        <Navbar.Brand href="#home">
          <img style={{ width: "100px", height: "55px" }} src={this.props.sorgente} alt="pic-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#features" id="ok" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#pricing" id="ok" className="text-white">
              <strong>TV Shows</strong>
            </Nav.Link>
            <Nav.Link href="#pricing" id="ok" className="text-white">
              Movies
            </Nav.Link>
            <Nav.Link href="#pricing" id="ok" className="text-white">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#pricing" id="ok" className="text-white">
              My List
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  fill="white"
                />
              </svg>
            </Nav.Link>
            <Nav.Link href="#deets" id="ok" className="text-white">
              KIDS
            </Nav.Link>
            <Nav.Link href="#deets">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
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
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="white" />
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavCustom;
