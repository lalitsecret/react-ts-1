import React from "react";

class Login extends React.Component {
  render() {
    return <div className="login">
        <form>
          <h3>Login</h3>
        
          <input placeholder="email"/>
          <input placeholder="phone"/>
          <input placeholder="password"/>
          <button>Login</button>
        </form>

    </div> 
  }
}
export default Login;
