import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  return (
    <Navbar>
      <Nav defaultActiveKey="Startseite" className="sidebar">
        <Nav.Link eventKey="Startseite" as={Link} to="/">
          Startseite
        </Nav.Link>
        <Nav.Link eventKey="Beitrag erstellen" as={Link} to="/postcreation">
          Link
        </Nav.Link>
        <Nav.Link eventKey="Suchen" as={Link} to="/search">
          Suchen
        </Nav.Link>
        <Nav.Link eventKey="Profil" as={Link} to="/profile">
          Profil
        </Nav.Link>
        <Nav.Link eventKey="Nachrichten" as={Link} to="/messenger">
          Nachrichten
        </Nav.Link>
        <Nav.Link eventKey="Logout" as={Link} to="/auth">
          Logout
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
