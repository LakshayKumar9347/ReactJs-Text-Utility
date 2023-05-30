import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  let Lcolor
  if (props.prop === 'light') {
     Lcolor = 'black'
  }
  if (props.prop === 'dark') {
     Lcolor = 'white'
  }
  const labelStyle = {color:`${Lcolor}`,
 
  }

    return(
    
    
    <nav className={`navbar navbar-expand-lg  navbar-${props.prop} bg-${props.prop}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{props.about}</a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.mode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label fade-in" htmlFor="flexSwitchCheckDefault " style={labelStyle}>Toggle Mode</label>
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