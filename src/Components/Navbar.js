import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">News</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
           
              <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link></li>
            </ul>

          </div>
        </div>
      </nav>
    )
  }
}
