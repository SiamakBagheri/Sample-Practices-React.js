import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.Timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.Timer);
  }

  render() {
    return (
      <div className="my-5">
        <h3>{this.state.time}</h3>
      </div>
    );
  }
}

export default Time;
