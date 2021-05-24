import React from "react";
import { Navbar, NavBarBrand, NavItems, NavLinks } from "./NavElements";
const NavBar = () => {
  return (
    <Navbar>
      <NavBarBrand>Styled Components</NavBarBrand>
      <NavItems>
        <NavLinks>Home</NavLinks>
        <NavLinks>About</NavLinks>
        <NavLinks>Contact Us</NavLinks>
      </NavItems>
    </Navbar>
  );
};

export default NavBar;
