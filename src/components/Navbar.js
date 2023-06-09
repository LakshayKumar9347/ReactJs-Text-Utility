import React from 'react'
import PropTypes from 'prop-types';
import Profile from './profile.png'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  let Lcolor
  if (props.prop === 'light') {
    Lcolor = 'black'
  }
  if (props.prop === 'dark') {
    Lcolor = 'white'
  }
  const labelStyle = {
    color: `${Lcolor}`,

  }
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.prop} bg-${props.prop}`}>
      <div className="container-fluid">
        <a className="navbar-brand w-1" href="/"><img src={`${Profile}`} alt={`${Profile}`} width="50" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/' >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about' >{props.about}</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.mode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault " style={labelStyle}>{props.prop === 'light' ? "Enable Dark Mode" : "Disable Dark Mode"}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}
Navbar.defaultProps = {
  title: 'Set title here',
  about: 'About text here'
}