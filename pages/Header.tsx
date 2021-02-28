import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component
{
  render()
  {
    return ( <header> 
            <div className="item">
              <h1>ecommerce lalit </h1>
            <div>

      <div className="item">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/Cart">Cart</Link>
        <Link to="/Orders">Orders</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Checkout">Checkout</Link>
        <Link to="/Logout">Logout</Link>
      <div>
    </header> );
  }
}
export default Header;