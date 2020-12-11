import React, { Component } from 'react'

class Signin extends Component {
  constructor(){
    super()
    this.state = {       
      email: "",
      password: "",
      error: "",
      redirectToRefere: false      
    }
  }

  handleChange = (name) => (event) => {
    this.setState({error: ""})
    this.setState({[name]: event.target.value})
  }

  clickSubmit = event => {
    event.preventDefault()
    const {email, password} = this.state
    const user = {      
      email: email,
      password: password
    }
    //console.log(user)
    this.signin(user)
    .then(data => {
      if(data.error) {
        this.setState({error: data.error})
      }
      else {
        //authenticate the user
        //redirect
      }  
    })
  }
  
  signin = user => {
    return fetch("http://localhost:8080/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json()
      })
      .catch(err => console.log(err))
  }
    
  signInForm = (email, password) => (
  <form>
    
    <div className="form-group">
      <label className="text-muted">Email</label>
      <input onChange={this.handleChange("email")} type="email" className="form-control" value={email} />
    </div>

    <div className="form-group">
      <label className="text-muted">Password</label>
      <input onChange={this.handleChange("password")} type="password" className="form-control" value={password} />
    </div>

    <button onClick={this.clickSubmit} className="mt-2 btn btn-raised btn-primary">Sign in</button>
  
  </form>
  )  
  
  render(){
    const { email, password, error} = this.state
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">SignIn To The Social Network</h2>
        
        <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
          {error}
        </div>
        
        {this.signInForm(email, password)}
      </div>
    )
  }
}

export default Signin