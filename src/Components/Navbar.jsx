import React from "react";
import logo from "../assets/cnext.png";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg bg-body-light">
      <div className="container-fluid d-lg-flex flex-lg-row ">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="" />
        </Link>

        <div className="d-flex">
          <input
            className="form-control searchinput me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
          <div>
            <form className="d-flex" role="search">
              <div className="profile d-flex ">
                <Link to="/profile">
                  <i className="bi bi-person-fill"></i>
                </Link>
                <Link to="/cart">
                  <span className="cartlogo">
                    <i className="bi bi-cart"></i>{" "}
                    <span className="length">{items.length} </span>
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
