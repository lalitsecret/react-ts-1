import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Cart from './Cart'
import Orders from './Orders'
import Profile from './Profile'
import Logout from './Logout'
import Checkout from './Checkout'
import Errpage from './Errpage'
class App extends React.Component
{
  render()
  {
    return <h1>App Works</h1>
  }
}
export default App;