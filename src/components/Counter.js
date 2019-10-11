import React from 'react';

class Counter extends React.Component{
  state = {
        count: 10
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1});
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1});
  };

  render(){
    return(
      <>
        <button onClick={ this.handleIncrement }>+</button>
        <div>{ this.state.count } </div>
        <button onClick={ this.handleDecrement }>-</button>
      </>
    );
  }
}

export default Counter
