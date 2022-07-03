import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import "./header.style.css";

function Header() {
  const { isSticky } = useSticky();

  return (
    <nav className={isSticky ? "navbar navbar-sticky" : "navbar"}>
      <div className="navbar--logo">
        <NavLink to="/">
          <h1>React Movie</h1>
        </NavLink>
      </div>
      <Navbar />
    </nav>
  );
}

export default Header;

export const useSticky = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return { isSticky };
};
