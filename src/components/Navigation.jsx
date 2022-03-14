import { NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand style={{fontSize:"1.5rem", paddingLeft: "0px", 
        textShadow: '.5px .5px .75px #D5F4FF' 
      }}  href="#">Weather PRO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="p-2 d-flex "
            style={{ maxHeight: "190px" }}
            navbarScroll>

            <NavLink to="/main/weather">HOME</NavLink>
            <NavLink to="/main/metar">METAR</NavLink>
            <NavLink to="/main/taf">TAF</NavLink>
            <NavLink to="/main/metar-taf">METAR | TAF</NavLink>
            <NavLink to="/main/metar-taf-decoded">DECODED DATA</NavLink>
            <NavLink to="/main/archive">ARCHIVE</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}
export default Navigation;
