import React from 'react'

const Login = () => {
  return (

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  )
}

export default Login
