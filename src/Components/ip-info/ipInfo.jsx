import React, { Component } from "react";
import { Triangle } from "react-loader-spinner";
import Info from "./info";
import getInfo from "./services/getInfo";

class IpInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    getInfo().then((data) => {
      this.setState({
        info: data,
        isLoading: false,
      });
    });
  }

  render() {
    const isLoading = this.state.isLoading;

    return (
      <>
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Triangle
              height="275"
              width="275"
              color="#4fa94d"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        ) : (
          <Info info={this.state.info} />
        )}
      </>
    );
  }
}

export default IpInfo;
