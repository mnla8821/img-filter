import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  console.log(location);
  const [move, setMove] = useState();
  useEffect(() => {
    location.pathname === "/" ? setMove(false) : setMove(true);
  }, [location.pathname]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={(newName) =>
                    newName.isActive === true ? "ali" : " "
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/About"
                  href="#"
                  className={(newName) =>
                    newName.isActive === true ? "ali" : " "
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
