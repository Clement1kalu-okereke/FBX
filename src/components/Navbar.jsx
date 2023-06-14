import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white  fixed-top mx-0">
        <div className="container ">
          <a
            className="navbar-brand d-flex justify-content-start  border-lg-0"
            href="index.html"
          >
            <img src="/images/logo-fs.png" alt="site icon" />
            <span className="text-uppercase fw-lighter ">TBX</span>
          </a>
          <form action="">
            <input
              className=""
              type="search"
              id="gsearch"
              name="gsearch"
              placeholder="what service are u looking for"
            />
            <label for="gsearch">
              <button className="d-inline ms-0 bg-dark" id="lab-btn">
                <i className="fa fa-search text-light"></i>{" "}
              </button>
            </label>
          </form>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse order-lg-1" id="navMenu">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item px-2 py-2">
                <a className="nav-link text-uppercase text-dark" href="#blogs">
                  TBX bussiness
                </a>
              </li>
              <li className="nav-item px-2 py-2">
                <a className="nav-link text-uppercase text-dark" href="#about">
                  Explore
                </a>
              </li>
              <li className="nav-item px-2 py-2 border-0">
                <a
                  className="nav-link text-uppercase text-dark"
                  href="#popular"
                >
                  English
                </a>
              </li>
              <li className="nav-item px-2 py-2 border-0">
                <a
                  className="nav-link text-uppercase text-dark"
                  href="#popular"
                >
                  become a seller
                </a>
              </li>
              <li className="nav-item px-2 py-2 border-0">
                <a
                  className="nav-link text-uppercase text-dark"
                  href="#popular"
                >
                  sign in
                </a>
              </li>
              <li className="nav-item px-2 py-2 border-0">
                <a className=" text-uppercase text-dark" href="#popular">
                  <button className="cust-btn btn-sm ">Join</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
