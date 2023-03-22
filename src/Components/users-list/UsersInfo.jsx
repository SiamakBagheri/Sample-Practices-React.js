import React, { Component } from "react";

class UsersInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      prevPropsUserId: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.usersID !== prevState.prevPropsUserId) {
      return {
        user: null,
        prevPropsUserId: nextProps.usersID,
      };
    }

    return null;
  }

  async getUserData(usersID) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${usersID}`
    );
    return await response.json();
  }

  componentDidMount() {
    this.getUserData(this.props.usersID).then((user) =>
      this.setState({ user })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.usersID !== this.props.usersID) {
      this.getUserData(this.props.usersID).then((user) =>
        this.setState({ user })
      );
    }
  }

  render() {
    const { user } = this.state;
    return (
      <>
        {user && (
          <div className="section">
            <p>id: {user.id}</p>
            <p>name: {user.name}</p>
            <p>username: {user.username}</p>
            <p>email: {user.email}</p>
            <p>phone: {user.phone}</p>
          </div>
        )}
      </>
    );
  }
}

export default UsersInfo;
