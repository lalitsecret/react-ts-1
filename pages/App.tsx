import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Cart from "./Cart";
import Orders from "./Orders";
import Profile from "./Profile";
import Logout from "./Logout";
import Checkout from "./Checkout";
import Errpage from "./Errpage";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Orders" component={Orders} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Checkout" component={Checkout} />
            <Route exact path="/Logout" component={Logout} />
            <Route component={Errpage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}
export default App;
