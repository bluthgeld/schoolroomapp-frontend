import React from 'react'
import {Route, Link, withRouter} from 'react-router-dom'

const Nav = (props) => {

  let handleOnLogout = () => {
    localStorage.removeItem("jwt")
    props.updateCurrentUser(null)
    props.history.push('/login')
  }

  let handleOnLogoutEd = () => {
    localStorage.removeItem("jwt")
    props.updateCurrentUser(null)
    props.history.push('/educator_login')
  }

  let button;

  if (props.logged_in.user_type === 'carer') {
  button = <button type="button" class="btn btn-primary" onClick={handleOnLogout} >Logout</button>
   } else {
  button = <button type="button" class="btn btn-primary" onClick={handleOnLogoutEd} >Logout</button>
   }

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
              <li className="nav-item">
                <Link to={`/${props.logged_in.user_type}/${props.logged_in.username}`} activeClassName="nav-link active" className="nav-link">Profile</Link>
              </li>
              <li className="nav-item">
                  <Link to={`/${props.logged_in.user_type}/${props.logged_in.username}/pa`} activeClassName="nav-link active" className="nav-link">Public Address</Link>
              </li>
              <li className="nav-item">

                {button}


              </li>
            </ul>
          </div>


        </nav>
      </div>
    </div>

  )
}

export default withRouter(Nav)
