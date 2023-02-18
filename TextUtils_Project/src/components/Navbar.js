import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const Navbar = (props) => {
  return (
    <>
      {/* Bootstrap Nabar Added  */}
      <nav
        className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
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
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.textAbout}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
            {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Switch to {props.mode === "light" ? "dark" : "light"} Mode
              </label>
            </div>
            {/* </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

// in order to avoid assigning other datatypes to props we use this
// is required we want to must assignination of prop
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  textAbout: PropTypes.string.isRequired,
};

// if did not give value to props then this default values will be assigned
Navbar.defaultProp = {
  title: "TextUtils",
  textAbout: "About Us",
};
