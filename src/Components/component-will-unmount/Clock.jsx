import React, { Component } from "react";
import Time from "./Time";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTime: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((state) => {
      return {
        showTime: !state.showTime,
      };
    });
  }

  render() {
    const showTime = this.state.showTime;
    return (
      <div className="text-center my-5">
        {showTime && <Time />}
        <button onClick={this.handleToggle} className="btn btn-outline-primary fw-bolder px-lg-5">
          {showTime ? "بستن تاریخ و زمان" : "نمایش تاریخ و زمان"}
        </button>
      </div>
    );
  }
}

export default Clock;
