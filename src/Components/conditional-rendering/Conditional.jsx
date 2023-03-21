import React, { Component } from "react";
import Greeting from "./Greeting";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";

class Conditional extends Component {
  state = {
    isLogin: true,
  };

  handleLogout() {
    this.setState({
      isLogin: false,
    });
  }

  handleLogin() {
    this.setState({
      isLogin: true,
    });
  }

  render() {
    let button = null;
    if (this.state.isLogin) {
      button = <LogoutBtn handleClick={() => this.handleLogout()} />;
    } else {
      button = <LoginBtn handleClick={() => this.handleLogin()} />;
    }

    return (
      <>
        <Greeting isLogin={this.state.isLogin} />
        {button}
      </>
    );
  }
}

export default Conditional;
