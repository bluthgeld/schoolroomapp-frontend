import React, { Fragment } from 'react'

const Home = () => {
  return (

      <div className="bg_schoolroom">


        <div className="jumbotron fixed-bottom w-75 mx-auto">
          <h1 className="display-4">Welcome to Schoolroom!</h1>
          <p className="lead">A simple tool to help Teachers communicate with Parents and Caregivers.</p>
          <p className="lead">Including Web and Mobile Event Notifications</p>
          <hr className="my-4" />
            <p>To use this service, you must Register for an Account and be Confirmed by your child's School.</p>
            <a className="btn btn-primary btn-lg" href="/register" role="button">Register Now!</a>
          <hr className="my-4" />
          <p className="lead">Have a Username/Password? <a href="/login">Login Here</a></p>
          </div>




      </div>

  )
}

export default Home
