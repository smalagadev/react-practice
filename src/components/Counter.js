import React from "react";

class Counter extends React.Component{
  state = {
    count: 10
  };

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
  };

  handleDecrement = () => {
    this.setState({count: this.state.count - 1});
  };

  render(){
    return(
      <>
        <div>
          <button onClick={this.handleIncrement}> + </button>
          { this.state.count }
          <button onClick={this.handleDecrement}> - </button>
        </div>
      </>
    );
  }
};

export default Counter;
