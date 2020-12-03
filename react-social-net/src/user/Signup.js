import React, { Component } from 'react'

class Signup extends Component {
  constructor(){
    super()
    this.state = {
      name: "", 
      email: "",
      password: "",
      error: ""
    }
  }

  handleChange = (name) => (event) => {
    this.setState({[name]: event.target.value})
  }
  
  render(){
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">Signup For The Social Network</h2>
        <form>
          <div className="form-group">
            <label className="text-muted">Name</label>
            <input onChange={this.handleChange("name")} type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className="text-muted">Email</label>
            <input onChange={this.handleChange("email")} type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label className="text-muted">Password</label>
            <input onChange={this.handleChange("password")} type="password" className="form-control" />
          </div>
          <button className="mt-2 btn btn-raised btn-primary">Signup</button>
        </form>
      </div>
    )
  }
}

export default Signup