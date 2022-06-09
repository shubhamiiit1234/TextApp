import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props)
{
  return (

      <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><b>{props.title}</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.theme==='info'?'dark':'light'} mx-2`}>
            <input className="form-check-input" type="checkbox" onClick={props.changeTheme} role="Routes" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Theme</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search"  aria-label="Search"/>
            <button className={props.theme==="info"?"btn btn-primary":"btn btn-secondary"} type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title : propTypes.string.isRequired,      // isRequired: must pass the props from App.js
  about: propTypes.string.isRequired
}

Navbar.defaultProps = {         // In case props are not passed from App.js
  title : "Default Title",
  about: "Default About"
}