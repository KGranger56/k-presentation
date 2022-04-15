import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home" activestyle>
            Home
          </NavLink>
          <NavLink to="/types" activestyle>
            Types
          </NavLink>
          <NavLink to="/equipment" activestyle>
            Equipment
          </NavLink>
          <NavLink to="/safety" activestyle>
            Safety
          </NavLink>
          <NavLink to="/faq" activestyle>
            FAQ
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
