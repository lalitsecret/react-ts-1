import React from "react";

class Profile extends React.Component {
  render() {
    return <div className="profile">
      <h1>my profile</h1>
      <h1>name</h1>
      <h1>email</h1>
      <h1>phone</h1>
      <h1>password</h1>
      <button>save changes</button>
    </div>;
  }
}
export default Profile;
