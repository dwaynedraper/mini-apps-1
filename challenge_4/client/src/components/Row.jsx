import React from 'react';
import Square from './Square.jsx';

const Row = (props) => {
  // console.log(props.row)
  // let mapped =
  // console.log(mapped)
  return (
    <tr>
      {props.row.map((square, i) => {
    return <Square key={i} value={square} column={i} updateSquare={props.updateSquare} />
  })}
    </tr>
  )
}

export default Row;