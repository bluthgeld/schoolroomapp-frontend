import React from 'react'
import {Route, Link, withRouter} from 'react-router-dom'

const Nav = (props) => {

  return (

    <div className="row">
      <div className="col-sm-12">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">Schoolroom</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link to={`/carer/${props.logged_in.username}`} className="nav-link active">Profile</Link>
              </li>
              <li className="nav-item">
                  <Link to={`/carer/${props.logged_in.username}/pa`} className="nav-link">Public Address</Link>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </div>

  )
}

export default withRouter(Nav)
