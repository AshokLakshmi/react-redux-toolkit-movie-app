import React, { useState } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  //---
  const nav = NavbarLinks.map(({ title, url }, index) => {
    return (
      <NavLink
        key={index}
        to={url}
        className="navbar--link-item"
        onClick={() => setToggle(false)}
      >
        {title}
      </NavLink>
    );
    //--
  });
  //--
  return (
    <>
      <HiOutlineMenuAlt1
        className="navbar-icon"
        onClick={() => setToggle(!toggle)}
      />
      <ul className={toggle ? "navbar--link show" : "navbar--link hide"}>
        {nav}
      </ul>
    </>
  );
  //--
}

export default Navbar;
