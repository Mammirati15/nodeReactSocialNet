import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => (
  <div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Sign In</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signin">Sign Up</Link>
      </li>
    </ul>
  </div>  
)

export default Menu;

