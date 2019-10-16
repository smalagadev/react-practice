import React from 'react';
import Card from './Card';

class Counter extends React.Component{
  state = {
    count:100
  };

  handleIncrement = () =>{
    this.setState( { count: this.state.count + 5})
  }

  handleDecrement = () =>{
    this.setState( { count: this.state.count - 5})
  }

  render(){
    return(
      <>
      <h1>Counter:</h1>
      <Card count={this.state.count} handleDecrement={this.handleDecrement} handleIncrement={this.handleIncrement}/>
      </>
    );
  };
}

export default Counter
