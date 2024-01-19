import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
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
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" to="/">
                Home
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/faq">
            FAQ's
          </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/quotegenerator">Quote Generator</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user">User</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/todolist">Todo List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/form">Form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cal">Cal</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

        </>
    )
}

export default Header;