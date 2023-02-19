import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { FaSistrix, FaHome, FaStar, FaCity } from "react-icons/fa";
import { useState, useEffect } from "react";
import CurrentWeather from "../currentWeather/CurrentWeather";
import WeekWeather from "../weekWeather/WeekWeather";
import "./NavCustom.css";

const NavCustom = (props) => {
  const [query, setQuery] = useState("");
  const [meteo, setMeteo] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const result = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=6e501f7c65b17073239db32c79de2f21`
      );
      if (result.ok) {
        const data = await result.json();
        setMeteo(data[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, [query]);
  return (
    <>
      <Navbar expand="lg" id="Navbar" className="px-5 py-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={props.logo} alt="pic" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1" className="d-flex align-items-center">
                <FaHome className="me-1" /> <strong>Home</strong>
              </Nav.Link>
              <Nav.Link href="#action1" className="d-flex align-items-center">
                <FaStar className="me-1" />
                <strong>Favourite</strong>
              </Nav.Link>
              <Nav.Link href="#action2" className="d-flex align-items-center">
                <FaCity className="me-1" />
                <strong>Tutte le città</strong>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={handleChange}
              />
              <Button onClick={handleSubmit}>
                <FaSistrix />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CurrentWeather lon={meteo.lon} lat={meteo.lat} />
      <WeekWeather lon={meteo.lon} lat={meteo.lat} />
    </>
  );
};

export default NavCustom;
