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
        <Navbar.Brand style={{fontSize:"2rem", paddingLeft: "0px", 
        textShadow: '1px 1px 1.5px #D5F4FF' 
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
            <NavLink to="/main/metar-taf">METAR / TAF</NavLink>
            <NavLink to="/main/metar-taf-decoded">METAR/TAF-Decoded</NavLink>
            <NavLink to="/main/archive">ARCHIVE</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  /* // <nav>
    //   <Input />
    //   <NavLink to="/main/weather">Forecast</NavLink>
    //   <NavLink to="/main/metar">METAR</NavLink>
    //   <NavLink to="/main/taf">TAF</NavLink>
    //   <NavLink to="/main/metar-taf">METAR / TAF</NavLink>
    //   <NavLink to="/main/metar-taf-decoded">
    //     METAR / TAF <br />
    //     (decoded)
    //   </NavLink>
    //   <NavLink to="/main/archive">Archive</NavLink>

    // </nav>
  ); */
}
export default Navigation;
