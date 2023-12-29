import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";

import "./index.css";
function Navbar(props) {
  let newstyle = {
    color: "white",
    backgroundColor: "black",
  };
  let mystyle = {
    backgroundColor: "rgb(197, 144, 247)",
    color: "aliceblue",
  };

  const [style, setStyle] = useState(mystyle);
  const [text, settext] = useState("Enable Dark Mode");
  const handledarkmode = () => {
    if (style.color === "aliceblue") {
      setStyle({ ...newstyle });
      settext("Enable Light Mode");
    } else {
      setStyle(mystyle);
      settext("Enable Dark Mode");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navi  " style={style}>
        <div className="container-fluid">
          <a className="navbar-brand bar" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="  nav-link  bar" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link bar" href="/">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle bar"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link bar" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-outline search" onClick={handledarkmode}>
            {text}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "add title",
};
