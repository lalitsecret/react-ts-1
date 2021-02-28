import React from "react";

class Signup extends React.Component {
  render() {
    return <div className="signup">
        <form>
          <h3>Signup</h3>
          <input placeholder="name"/>
          <input placeholder="email"/>
          <input placeholder="phone"/>
          <input placeholder="password"/>
          <button>signup</button>
        </form>

    </div> 
  }
}
export default Signup;
