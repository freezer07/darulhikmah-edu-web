import { FC } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { MenuComponents } from "./MenuComponents";

const NavbarHeader: FC = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">{import.meta.env.VITE_APP_NAME}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <MenuComponents />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHeader;
