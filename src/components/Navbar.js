import React from "react";
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.logo}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>

          </ul>

          <div className="form-check d-flex form-switch container col-sm-1 my-2 text-light">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode} />
            <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault" >{props.btnText}</label>
          </div>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  about: PropTypes.string
}

Navbar.defaultProps = {
  logo: "This is logo",
  about: "This is about us"
}