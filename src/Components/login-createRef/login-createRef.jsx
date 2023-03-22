import React, { Component } from "react";
import "./style.css";

class LoginCreateRef extends Component {
  constructor(props) {
    super(props);
    this.usernameInput = React.createRef();
  }

  componentDidMount() {
    this.usernameInput.current.focus();
  }

  // این راه حل هم میشه ولی زیاد توصیه نمیشه
  // componentDidMount() {
  //   document.querySelector('[type="text"]').focus();
  // }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form method="post">
          <input
            ref={this.usernameInput}
            type="text"
            name="UserName"
            placeholder="UserName"
            required
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            required
          />
          <button type="submit" className="btn btn-primary btn-block btn-large">
            Let Me in
          </button>
        </form>
      </div>
    );
  }
}

export default LoginCreateRef;
