import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent Render called");

    return (
      <div>
        <h1>Hi we are builing a new site.</h1>
        {/*<User name = "Mota Bhai" location = "India"/>*/}
        <UserClass name="Jay" location="Mumbai" />
      </div>
    );
  }
}

export default About;
