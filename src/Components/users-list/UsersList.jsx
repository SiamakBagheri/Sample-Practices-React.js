import React, { Component } from "react";
import "./style.css";
import UsersInfo from "./UsersInfo";
import UsersSelector from "./UsersSelector";

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };

    this.handleChangeUser = this.handleChangeUser.bind(this);
  }

  handleChangeUser(index) {
    this.setState({
      selectedIndex: index,
    });
  }

  render() {
    const users = [1, 2, 3, 4];
    const { selectedIndex } = this.state;

    return (
      <>
        <UsersSelector
          handleChangeUser={this.handleChangeUser}
          selectedIndex={selectedIndex}
          users={users}
        />
        <UsersInfo usersID={users[selectedIndex]} />
      </>
    );
  }
}

export default UsersList;
