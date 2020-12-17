import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { signout, isAuthenticated } from '../auth/index'

const isActive = (history, path) => {
  if(history.location.pathname === path) return {color: "#009874"}
    else return {color: "#000000"}
}

const Menu = ({history}) => (
  <div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/")} to="/">Home</Link>
      </li>

      {!isAuthenticated() && (
      <>
        <li className="nav-item">
          <Link className="nav-link" style={isActive(history, "/signin")} to="/signin">Sign In</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  style={isActive(history, "/signup")} to="/signup">Sign Up</Link>
        </li>
      </>
      )}
      
     {isAuthenticated() && (
      <>
        <li className="nav-item">
          <a className="nav-link"  style={isActive(history, "/signout"), {cursor: "pointer"}} onClick={() => signout(() => history.push("/"))} >Sign Out</a>
        </li>

        <li className="nav-item">         
          <Link to={`user/${isAuthenticated().user._id}`} style={{color: "#000"}} className="nav-link">
            {`${isAuthenticated().user.name}'s Profile`}
          </Link>        
        </li>
      </>
     )}
    </ul>
  </div>  
)

export default withRouter(Menu);

