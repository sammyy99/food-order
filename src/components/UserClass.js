import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo:{
            name:"Sam",
            location:"Meerut"
        }
    };
  }

  async componentDidMount() {
     const data = await fetch ("https://api.github.com/users/sammyy99")
     const json = await data.json()

     this.setState({userInfo:json})
  }

  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-info">
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
