import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

//for styling we must used camelCase
const navbarStyle = {
  backgroundColor: "#eeeeee",
};

const Header = (props) => {
  const { title } = props;
  return (
    <Navbar style={navbarStyle} data-bs-theme="light">
      <Container>
        <Logo
          alt={title}
          style={{ maxWidth: "12rem", maxHeight: "2rem" }}
        ></Logo>
      </Container>
    </Navbar>
  );
};

export default Header;
