import React from 'react';

function Card(props){
  return(
    <>
      <div>
        <p>This is a card!</p>
        <button onClick={props.handleIncrement}> +5</button>
        <p>{props.count}</p>
        <button onClick={props.handleDecrement}> -5</button>
      </div>
    </>
  );
}

export default Card;
